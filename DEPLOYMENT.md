# GitHub Pages 部署指南

## 📝 第一步：生成 GitHub Personal Access Token

1. **访问 GitHub Token 设置页面**：
   https://github.com/settings/tokens

2. **生成新 Token**：
   - 点击 "Generate new token" → "Generate new token (classic)"

3. **配置 Token 权限**：
   - Name: `Portfolio Deployment`
   - Expiration: 选择 `90 days` 或更长时间
   - 勾选权限：
     - ✅ `repo` (Full control of private repositories)
     - ✅ `workflow` (如果需要)

4. **生成并复制**：
   - 点击页面底部的 "Generate token"
   - **立即复制 Token**（只显示一次！）
   - 格式类似：`ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

---

## 🚀 第二步：执行部署

### 方法 1：使用部署脚本（推荐）

在项目目录执行：

```bash
cd /Users/macbook/芮菡个人网站
chmod +x deploy.sh
./deploy.sh
```

当提示时，粘贴您的 Token。

### 方法 2：手动执行

```bash
cd /Users/macbook/芮菡个人网站

# 添加远程仓库（使用 Token）
git remote add origin https://TOKEN@github.com/mmcbolo-star/ruihan-portfolio.git

# 替换 TOKEN 为您的实际 Token

# 推送代码
git push -u origin main
```

---

## ⚙️ 第三步：配置 GitHub Pages

1. 访问仓库 Settings：https://github.com/mmcbolo-star/ruihan-portfolio/settings/pages

2. 在 "Source" 部分：
   - Branch: `main`
   - Folder: `/ (root)`

3. 点击 "Save"

4. 等待几分钟后，访问：
   ```
   https://mmcbolo-star.github.io/ruihan-portfolio/
   ```

---

## 🔐 安全提示

- ⚠️ **不要将 Token 提交到 Git 仓库**
- ⚠️ **不要在公开场合分享 Token**
- 💡 Token 可以保存在 `~/.github-token` 文件中方便重复使用

---

## 📱 快捷命令（保存 Token 后）

```bash
# 将 Token 保存到文件（只执行一次）
echo "YOUR_TOKEN_HERE" > ~/.github-token
chmod 600 ~/.github-token

# 使用自动部署脚本
./deploy.sh
```
