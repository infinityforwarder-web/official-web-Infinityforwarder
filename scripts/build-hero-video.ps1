# Rebuild cinematic hero montage (port → ship → air → road → warehouse)
# Requires: ffmpeg — winget install Gyan.FFmpeg

$ffmpeg = "ffmpeg"
$root = Split-Path $PSScriptRoot -Parent
$temp = Join-Path $PSScriptRoot "hero-clips-v2"
$outVideo = Join-Path $root "public\videos\hero-logistics.mp4"
$outPoster = Join-Path $root "public\images\hero-poster.jpg"

New-Item -ItemType Directory -Force -Path $temp | Out-Null

$clips = [ordered]@{
  "01-port-aerial" = "https://assets.mixkit.co/videos/36341/36341-720.mp4"
  "02-container-ship" = "https://assets.mixkit.co/videos/4450/4450-720.mp4"
  "03-airplane" = "https://assets.mixkit.co/videos/7023/7023-720.mp4"
  "04-truck-road" = "https://assets.mixkit.co/videos/2277/2277-720.mp4"
  "05-warehouse" = "https://assets.mixkit.co/videos/21389/21389-720.mp4"
}

foreach ($name in $clips.Keys) {
  $dest = Join-Path $temp "$name.mp4"
  if (-not (Test-Path $dest)) {
    Write-Host "Downloading $name..."
    Invoke-WebRequest -Uri $clips[$name] -OutFile $dest -UseBasicParsing
  }
}

$vf = "scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,fps=24,eq=contrast=1.07:saturation=1.18:brightness=0.03,unsharp=5:5:0.4"
$names = @($clips.Keys)
for ($i = 0; $i -lt $names.Count; $i++) {
  & $ffmpeg -y -ss 1 -i (Join-Path $temp "$($names[$i]).mp4") -t 4.5 -vf $vf -an `
    -c:v libx264 -preset fast -crf 22 -pix_fmt yuv420p (Join-Path $temp "seg-$i.mp4")
}

$fade = 0.7
$dur = 4.5
$o1 = $dur - $fade
$o2 = $o1 + $dur - $fade
$o3 = $o2 + $dur - $fade
$o4 = $o3 + $dur - $fade

$filter = @"
[0:v][1:v]xfade=transition=fadeblack:duration=${fade}:offset=${o1}[v01];
[v01][2:v]xfade=transition=fadeblack:duration=${fade}:offset=${o2}[v02];
[v02][3:v]xfade=transition=fadeblack:duration=${fade}:offset=${o3}[v03];
[v03][4:v]xfade=transition=fadeblack:duration=${fade}:offset=${o4}[vout]
"@

$blend = Join-Path $temp "hero-blend.mp4"
& $ffmpeg -y -i (Join-Path $temp "seg-0.mp4") -i (Join-Path $temp "seg-1.mp4") `
  -i (Join-Path $temp "seg-2.mp4") -i (Join-Path $temp "seg-3.mp4") -i (Join-Path $temp "seg-4.mp4") `
  -filter_complex $filter -map "[vout]" -an -c:v libx264 -preset slow -crf 25 -pix_fmt yuv420p -movflags +faststart $blend

& $ffmpeg -y -i $blend -vf "vignette=angle=PI/5" -c:v libx264 -preset slow -crf 26 -pix_fmt yuv420p -movflags +faststart -an $outVideo
& $ffmpeg -y -i $outVideo -ss 00:00:04 -vframes 1 -update 1 $outPoster

Write-Host "Done: $outVideo"
