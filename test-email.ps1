$body = @{
    name = 'Test User - AI-EditPro'
    email = 'test@example.com'
    subject = 'Test Email from AI-EditPro'
    message = 'This is a test email to verify the contact form is working correctly. If you receive this, the email system is fully functional!'
    type = 'general'
} | ConvertTo-Json

$response = Invoke-WebRequest -Uri 'http://localhost:3000/api/contact' `
    -Method POST `
    -ContentType 'application/json' `
    -Body $body -UseBasicParsing

Write-Host "Response Status: $($response.StatusCode)"
Write-Host "Response: $($response.Content)"
