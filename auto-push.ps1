# auto-push.ps1
# This script monitors the folder for changes and automatically commits and pushes them to GitHub.

$lastPushTime = [DateTime]::MinValue
$cooldownSeconds = 5

Write-Host "====================================================" -ForegroundColor Cyan
Write-Host "  Hangul Learning App - Auto Git Push Watcher  " -ForegroundColor Cyan
Write-Host "====================================================" -ForegroundColor Cyan
Write-Host "Watching directory: $(Get-Location)"
Write-Host "Monitoring for changes every 5 seconds..."
Write-Host "Press Ctrl+C to stop this watcher."
Write-Host "----------------------------------------------------"

while ($true) {
    try {
        # Check if there are any changes (staged, unstaged, or untracked)
        # Excluding the auto-push scripts and log files from trigger if necessary,
        # but gitignore takes care of most things.
        $status = git status --porcelain
        
        if ($status) {
            # Filter out auto-push files or logs if we want to avoid self-trigger loops,
            # though they shouldn't change unless modified.
            
            Write-Host "Changes detected at $(Get-Date -Format 'HH:mm:ss'):" -ForegroundColor Yellow
            Write-Host $status
            
            Write-Host "Staging changes..." -ForegroundColor Gray
            git add .
            
            $commitMsg = "Auto-update: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
            Write-Host "Committing with message: '$commitMsg'..." -ForegroundColor Gray
            git commit -m $commitMsg
            
            Write-Host "Pushing to GitHub (origin main)..." -ForegroundColor Blue
            git push origin main
            
            if ($LASTEXITCODE -eq 0) {
                Write-Host "Successfully pushed to GitHub!" -ForegroundColor Green
            } else {
                Write-Host "Push failed. If this is the first time, please authenticate in the terminal." -ForegroundColor Red
            }
            Write-Host "----------------------------------------------------"
        }
    } catch {
        Write-Warning "An error occurred: $_"
    }
    
    Start-Sleep -Seconds 5
}
