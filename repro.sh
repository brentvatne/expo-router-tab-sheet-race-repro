#!/bin/sh
# Opens a form sheet, then a link back to the root, then (with no pause) a link to a form sheet in another tab's stack.
# Usage: ./repro.sh <exp://host:port> [pause-seconds-after-the-root-link, default 0]
# Start the project in Expo Go on a booted iOS simulator first (npx expo start --ios), and pre-approve the exp scheme:
#   xcrun simctl spawn booted defaults write com.apple.launchservices.schemeapproval "com.apple.CoreSimulator.CoreSimulatorBridge-->exp" -string host.exp.Exponent
set -e
host="$1"; pause="${2:-0}"
open() { xcrun simctl openurl booted "$host/--/$1"; }
open "share"          # a form sheet in the root Stack
sleep 3
open "?r=1"           # back to the root (a bare "$host/--/" does not navigate in Expo Go)
sleep "$pause"
open "p?d=race"       # a form sheet in the List tab's Stack
sleep 5
xcrun simctl io booted screenshot result.png >/dev/null
echo "Screenshot in result.png. With pause 0 the P sheet is missing; with pause 3 it shows."
