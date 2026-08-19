output "public_ip" {
  description = "Public IP address of the portfolio server"
  value       = aws_instance.portfolio_server.public_ip
}