export default function access(initialState: { currentUser?: API.CurrentUser } | undefined) {
  const { currentUser } = initialState ?? {};

  return {
    // 定义一个权限叫 canAdmin
    // 逻辑：如果当前用户的 role 是 'admin'，则拥有此权限
    canAdmin: currentUser && currentUser.role === 'admin',

    // 你可以扩展更多
    // canDeleteProduct: currentUser?.permissions?.includes('product:delete'),
  };
}
