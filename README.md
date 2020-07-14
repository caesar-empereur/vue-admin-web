## vue-admin-web 项目的 web 端

```
项目运行步骤

1 环境配置
    1 nginx 的配置
    2 项目 config 目录下的 dev, test, pro 环境的接口地址配置
    3 操作系统的 host 文件配置
2 运行项目
    1 安装依赖：根目录 npm install 
    2 本地运行：npm run dev
    3 本地打包：npm run build:dev
    4 本地访问 https://vue-admin-web.top
```
- nginx http 无域名最简单的配置
```
worker_processes  1;

#pid        logs/nginx.pid;

events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    access_log  logs/access.log;

    keepalive_timeout  65;

    server {
        listen       8080;
        server_name  localhost;

        location / {
            root   /home/app/project/vue/vue-admin-web/dist;
            index  index.html index.htm;
        }
    }

}

```

- nginx https 的配置
    ```
    需要在 nginx/conf 目录下增加 vhost 目录存放 vue-admin-web.conf文件
    ```
    - http 接口对应域名的配置
        - 对应配置文件 vue-admin-web.conf
        
        ```
        server {
        
        	listen       80;
        	server_name  vue-admin-web.top;
        	return   301 https://$server_name$request_uri;
        	
        }
        
        server {
        
        	listen       443 ssl http2;
        	server_name  vue-admin-web.top;
        	
        	ssl_certificate		D:/dev/app/nginx/SSL/nginx/aliyun/vue-admin-web/vue-admin-web.top.pem;
        	ssl_certificate_key D:/dev/app/nginx/SSL/nginx/aliyun/vue-admin-web/vue-admin-web.top.key;
        	
        	ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        	ssl_session_cache    shared:SSL:1m;
        	ssl_session_timeout  5m;
        	ssl_ciphers  HIGH:!aNULL:!MD5;
        	ssl_prefer_server_ciphers  on;
        
        	location / {
        		root D:\dev\project\vue\vue-admin-web\dist;
        		index index.html index.htm;
        	}
        }
        ```

    - nginx.conf 的配置
    
        ```
        #user  nobody;
        worker_processes  1;
        error_log  logs/error.log;
        #pid        logs/nginx.pid;
        
        events {
            worker_connections  1024;
        }
        
        
        http {
            include       mime.types;
            default_type  application/octet-stream;
        
            log_format  main  '$remote_addr - $time_local - $status $body_bytes_sent';
            access_log  logs/access.log;
            sendfile        on;
            keepalive_timeout  65;
            
            # 如果证书能支持多级域名的话，可以用这 2 个全局证书配置
            ssl_certificate 	 D:/dev/app/nginx/SSL/nginx/create/zhengshu.pem;
            ssl_certificate_key  D:/dev/app/nginx/SSL/nginx/create/zhengshu.key;
            
            server {
                listen   80 default;
                server_name  _;
                return 403;
            }
        
            server_names_hash_bucket_size 64; 
 
            include vhost/*.conf;
        }
        ```


- 操作系统的 host 文件配置
    ```
    127.0.0.1 vue-admin-web.top
    ```
