import request from '@/utils/request';

export async function getCommentsList(params:any): Promise<any> {
  const newParams = {
    page: params.current,
    limit: params.pageSize
  }
  return request('/comment/list',{params:newParams});
}
export async function getCommentsById(id:string): Promise<any> {
  return request(`/comment/list/${id}`);
}
export async function createComment(data: any): Promise<any> {
  return request.post('/comment/create', { data });
}
export async function updateComment(data: any): Promise<any> {
  return request.post('/comment/update', { data });
}