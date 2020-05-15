

## nginx https 配置
```
# local.vue-web.com
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
