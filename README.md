# Demo Node Deployment
A simple demo deployment on Kubernetes with NodeJS

## Author: Thanh Nguyen
- Personal profile: https://github.com/thanh1669
- Say hello: thanhlocalhost@gmail.com

# Thông tin về ứng dụng

Các biến môi trường:

|   Tên biến   | Điều kiện  | Giá trị mẫu           |             Diễn giải              |
|--------------|------------|-----------------------|------------------------------------|
| `PORT`       | `required` | 3000                  | Cổng app lắng nghe                 |
| `MESSAGE`    | `required` | Hello world           | Thông điệp khi gọi API sẽ hiển thị |
| `VERSION`    | `optional` | 1.0.0                 | Version của ứng dụng               |

Docker image (có thể tự build hoặc sử dụng sẵn image sau):
- `thanh1669/demo-node-deployment`
