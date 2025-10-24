/**
 * 获取包版本信息的工具函数
 */

/**
 * 获取xf-mobile-ui包的版本信息
 * @returns {Promise<string>} 包版本号
 */
export async function getXfMobileUIVersion(): Promise<string> {
  try {
    // 尝试从node_modules中读取xf-mobile-ui的实际版本
    const packageInfo = await import('xf-mobile-ui/package.json');
    return packageInfo.version || '未知版本';
  } catch (error) {
    console.warn('无法获取xf-mobile-ui版本信息:', error);
    return '版本获取失败';
  }
}

/**
 * 获取Vant包的版本信息
 * @returns {Promise<string>} 包版本号
 */
export async function getVantVersion(): Promise<string> {
  try {
    // 尝试从node_modules中读取vant的实际版本
    const packageInfo = await import('vant/package.json');
    return packageInfo.version || '未知版本';
  } catch (error) {
    console.warn('无法获取vant版本信息:', error);
    return '版本获取失败';
  }
}

/**
 * 获取Vue的实际版本（通过Vue对象）
 * @returns {Promise<string>} Vue版本号
 */
export async function getVueVersion(): Promise<string> {
  try {
    // 通过Vue对象获取版本
    const vue = await import('vue');
    return vue.version || '未知';
  } catch (error) {
    console.warn('无法获取Vue版本:', error);
    return '获取失败';
  }
}
