GEEKO CMS v1.03 README
--------------------------------------------------------------------------

1) The simplest way to use GEEKOCMS is to modify the files 

js/cms_content.js & js/news_content.js

2) To add a new page , add a new line in cms_content.js like this:

Page["Your Page Name"] = "Your Page Content";

3) dont use [Enter] to have a new row in content area. Use html tag <br> instead

4) when want to add " use a backslash: \"  

So <a href="zzz" must be enteres as <a href=\"zzz\"

5) To delete a Page remove the row in cms_content.js same to News

6) in this version u must let a default page "home"