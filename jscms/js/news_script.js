     /////////////////////////////////////////////////////////////////////////////////
    ///
   ///     JSCMS v1.03 		 	
  ///      Copyright SIX ORANGES ;  info@ci3.net
 ///
/////////////////////////////////////////////////////////////////////////////////



function writeNewsDetails(News)
{
  with (document)
  {
	var table_of_contents = "list"; 

    var blank = " "; // blank page
    var content = (location.search) ? location.search.substring(1, location.search.length) : table_of_contents;
	
	write("<h4>"+content+"</h4><br>");
	
	write(News[content]);
  
  }
}


function writeNewsList(News)
{
  with (document)
  {
    write("");
    var j = 0;
    var first;
    write("<table >");
    for (i in News)
    {
       first = i;
       write("<tr>");
         write("<td class='text_news'><a href='#' onClick=\"javascript:writeNewsList3(News);\"");
       write("'><span class='title_news'>");
       write(i);
       write("</span></a><br>");
	   write("");
	   write(News[i].substring(0,140));
       write("...<br><a href='#' onClick=\"javascript:writeNewsList3(News);\">[Read more]</a><br><br>");
	   write("</td>");
       j++
       write("</tr>");
	   if (j == 3) break; 
	}
    write("</table>");
  }
}


function writeNewsList2(News)
{
  with (document)
  {
    write("");
    var j = 0;
    var first;
    write("<center><table width='100%'>");
    for (i in News)
    {
       first = i;
       write("<tr>");
         write("<td ><br>");
       
       write("<b>");
       write(i);
       write("</b><br>");
	   write("");
	   write(News[i]);
       write("</td>");
       j++
       write("</tr>");
    }
    write("</table></center>");
  }
}


function writeNewsList3(News)
{
  var ss;

    ss=("");
    var j = 0;
    var first;
    ss+=("<h3><font color=black>news</font></h3><center><table width='100%'>");
    for (i in News)
    {
       first = i;
       ss+=("<tr>");
         ss+=("<td ><br>");
       
       ss+=("<b>");
       ss+=(i);
       ss+=("</b><br>");
	   ss+=("");
	   ss+=(News[i]);
       ss+=("</td>");
       j++
       ss+=("</tr>");
    }
    ss+=("</table></center>");
	document.getElementById("myContent").innerHTML = ss; 
}


