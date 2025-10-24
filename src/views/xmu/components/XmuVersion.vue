<template>
  <div class="version-info">
    <div class="version-item">
      <span class="label">xf-mobile-ui版本:</span>
      <span class="value">{{ xfMobileUIVersion }}</span>
    </div>
    <div class="version-item">
      <span class="label">Vue版本:</span>
      <span class="value">{{ vueVersion }}</span>
    </div>
    <div class="version-item">
      <span class="label">Vant版本:</span>
      <span class="value">{{ vantVersion }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getXfMobileUIVersion, getVantVersion, getVueVersion } from '@/utils/packageInfo'

const xfMobileUIVersion = ref('加载中...');
const vueVersion = ref('加载中...');
const vantVersion = ref('加载中...');

// 获取版本信息
onMounted(async () => {
  try {
    // 使用专门的函数获取各个包的版本
    const xfVersion = await getXfMobileUIVersion();
    const vantVer = await getVantVersion();
    const vueVer = await getVueVersion();
    
    xfMobileUIVersion.value = xfVersion;
    vantVersion.value = vantVer;
    vueVersion.value = vueVer;
  } catch (error) {
    console.error('获取版本信息失败:', error);
    xfMobileUIVersion.value = '获取失败';
    vueVersion.value = '获取失败';
    vantVersion.value = '获取失败';
  }
});
</script>

<style scoped>
.version-info {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  color: white;
  position: relative;
  overflow: hidden;
}

.version-info::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  pointer-events: none;
}

.version-info h3 {
  margin: 0 0 16px 0;
  color: white;
  font-size: 18px;
  font-weight: 700;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;
}

.version-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.version-item:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.version-item:last-child {
  margin-bottom: 0;
}

.label {
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.value {
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.2);
  padding: 4px 12px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.value:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.05);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .version-info {
    padding: 16px;
    margin-bottom: 20px;
  }
  
  .version-info h3 {
    font-size: 16px;
  }
  
  .version-item {
    padding: 6px 10px;
    margin-bottom: 10px;
  }
  
  .label, .value {
    font-size: 13px;
  }
}
</style>
