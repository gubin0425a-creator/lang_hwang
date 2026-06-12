@echo off
title Hangul Learning App - Auto Git Push Watcher
echo ====================================================
echo Starting Auto Git Push Watcher...
echo ====================================================
echo.
echo Note: If this is your first time pushing to this repository,
echo a GitHub login prompt may appear. Please log in to complete the setup.
echo.
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0auto-push.ps1"
pause
