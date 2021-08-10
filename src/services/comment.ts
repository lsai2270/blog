import request from '@/utils/request';

export async function getCommentsList(): Promise<any> {
  return request('/comment/list');
}
export async function getCommentById(id:string): Promise<any> {
  return request(`/comment/list/${id}`);
}
export async function createComment(data: any): Promise<any> {
  return request.post('/comment/create', { data });
}
