import os
import re
import shutil

"""脚本功能：处理个人博客在编写过程中可能遇到的问题。

"""

# 项目根目录
root_dir = os.path.dirname(os.path.abspath(__file__))

# 图片存放的文件夹
image_folder = os.path.join(root_dir, 'image')

def process_picture(root, content, file):
    """_summary_
    1、获取md文件中关于图片链接的内容；
    2、获取到图片名字，到image文件夹中找寻该名字的图片，并复制该图片到：.md文件所在文件夹/assets/
    3、将图片路径改为固定内容：./assets/图片名称
    4、将更改后的内容写入文件
    """
    # 使用正则表达式匹配图片路径（![]()格式）
    pattern = r'!\[.*?\]\(([^)]+/([^/]+\.(?:png|jpg|jpeg|gif|bmp|webp)))\)'
    image_paths = re.findall(pattern, content)

    # 遍历所有图片路径
    for image_path in image_paths:
        # 提取图片的文件名
        image_name = os.path.basename(image_path[0])
        
        # 构建图片在 image 文件夹中的路径
        image_source = os.path.join(image_folder, image_name)
        
        # 如果图片存在，则复制到当前文件夹的 assets 文件夹
        if os.path.exists(image_source):
            # 创建 assets 文件夹（如果不存在的话）
            assets_folder = os.path.join(root, 'assets')
            if not os.path.exists(assets_folder):
                os.makedirs(assets_folder)
            
            # 构建目标图片路径
            image_target = os.path.join(assets_folder, image_name)

            # 复制图片
            shutil.copy(image_source, image_target)
            #print(f"图片 {image_name} 已复制到 {assets_folder}")

            # 更新图片路径为 ./assets/图片名称
            updated_image_path = f'./assets/{image_name}'
            content = content.replace(image_path[0], updated_image_path)
        else:
            print(f"图片 {image_name} 未找到，图片名字：{file}")

    return content


def process_highlight(content):
    pattern = r"\*\*(【八股】.*?\*\*)"
    modified_text = re.sub(pattern, lambda m: "==" + m.group(0)[2:-2] + "==", content)
    
    return modified_text

def process_TOC(content):
    content = re.sub(r"\[toc\]", "", content, flags=re.IGNORECASE)
    return content

def main():
    # 遍历项目中的所有文件夹
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            # 检查文件是否为 .md 文件，且不是 README.md
            if file.endswith('.md') and file != 'README.md':
                # 获取文件所在的文件夹路径
                md_file_path = os.path.join(root, file)
                
                # 读取 .md 文件
                with open(md_file_path, 'r', encoding='utf-8') as md_file:
                    content = md_file.read()

                # 处理图片
                content = process_picture(root, content, file)
                
                # 处理高亮
                content = process_highlight(content)

                # 处理[TOC]
                content = process_TOC(content)
                

                # 将修改后的内容写回到 .md 文件中
                with open(md_file_path, 'w', encoding='utf-8') as md_file:
                    md_file.write(content)
                    #print(f"文件 {md_file_path} 的图片路径已更新。")

if __name__ == "__main__":
    print("开始处理")
    main()
    print("结束处理")
    
    """ 白名单，不用处理
    
    图片 image-20250324153114665.png 未找到，图片名字：1.Linux基础.md
    
    该图片及其以前的内容都不用处理
    
    """