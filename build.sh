git pull
docker build . --squash -t registry.cn-shanghai.aliyuncs.com/blog_store/blog_client:latest
docker push registry.cn-shanghai.aliyuncs.com/blog_store/blog_client:latest
