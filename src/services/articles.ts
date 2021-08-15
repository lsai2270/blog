import request from '@/utils/request';

export async function getList(params:any): Promise<any> {
  const newParams = {
    page: params.current,
    limit: params.pageSize
  }
  return request('/article/list',{params:newParams});
}
export async function getArcticleById(id:string): Promise<any> {
  return request(`/article/list/${id}`);
}
export async function createArticle(data: any): Promise<any> {
  return request.post('/article/create', { data });
}
