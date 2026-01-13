#!/bin/bash

echo "================================"
echo "   GitHub Pages 自动部署脚本"
echo "================================"
echo ""

# 检查是否已保存 Token
if [ -f ~/.github-token ]; then
    echo "✓ 找到保存的 Token"
    TOKEN=$(cat ~/.github-token)
else
    echo "请输入您的 GitHub Personal Access Token:"
    echo "（访问 https://github.com/settings/tokens 生成）"
    read -s TOKEN
    echo ""
    
    # 询问是否保存 Token
    echo "是否保存 Token 以便下次使用？(y/n)"
    read -r SAVE_TOKEN
    
    if [ "$SAVE_TOKEN" = "y" ] || [ "$SAVE_TOKEN" = "Y" ]; then
        echo "$TOKEN" > ~/.github-token
        chmod 600 ~/.github-token
        echo "✓ Token 已保存到 ~/.github-token"
    fi
fi

# 设置远程仓库 URL（使用 Token）
echo "配置远程仓库..."
git remote remove origin 2>/dev/null || true
git remote add origin https://$TOKEN@github.com/mmcbolo-star/ruihan-portfolio.git

# 推送代码
echo ""
echo "正在推送代码到 GitHub..."
echo "--------------------------------"
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "================================"
    echo "✓ 代码推送成功！"
    echo "================================"
    echo ""
    echo "下一步：配置 GitHub Pages"
    echo "1. 访问：https://github.com/mmcbolo-star/ruihan-portfolio/settings/pages"
    echo "2. Source → Branch: main, Folder: / (root)"
    echo "3. 点击 Save"
    echo ""
    echo "等待几分钟后，您的网站将在以下地址可用："
    echo "https://mmcbolo-star.github.io/ruihan-portfolio/"
    echo ""
else
    echo ""
    echo "❌ 推送失败，请检查："
    echo "1. Token 是否正确"
    echo "2. 是否已在 GitHub 创建 ruihan-portfolio 仓库"
    echo "3. 仓库名称是否正确"
    echo ""
fi
