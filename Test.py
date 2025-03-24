import re

# 示例字符串
text = "**操作系统：** 这是一个示例文本。**操作系统:** 这是一个示例文本"

# 正则表达式替换
new_text = re.sub(r'\*\*(.*?)[:：]\*\*', r'**\1**：', text)

print(new_text)
