import request from '@/utils/request';

export async function getList(params:any): Promise<any> {
  let newParams:any = {
    page: params.current,
    limit: params.pageSize
  }
  if(params.category){
    newParams.category = params.category;
  }
  return request('/article/list',{params:newParams});
}
export async function getArcticleById(id:string): Promise<any> {
  return request(`/article/list/${id}`);
}
export async function createArticle(data: any): Promise<any> {
  return request.post('/article/create', { data });
}
export async function updateArticle(data: any): Promise<any> {
  return request.post('/article/update', { data });
}
