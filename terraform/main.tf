resource "aws_security_group" "portfolio_sg" {
  name        = "portfolio-security-group"
  description = "Security group for portfolio server"

  ingress {
    description = "SSH"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "HTTP"
    from_port   = 8081
    to_port     = 8081
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
resource "aws_instance" "portfolio_server" {
  ami = "ami-0b6d9d3d33ba97d99"
  instance_type = "t3.micro"
  key_name      = "aws_shell_key"

  vpc_security_group_ids = [aws_security_group.portfolio_sg.id]

  tags = {
    Name = "Devanshi-Portfolio-Server"
  }
}