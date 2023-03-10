document.write("<table border='1'>");
document.write("<tr><th>N</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th></tr>");

for (let i = 0; i <= 9; i++) {
  document.write("<tr>");
  document.write("<td>" + i + "</td>");

  for (let j = 1; j <= 9; j++) {
    document.write("<td>" + i*j + "</td>");
  }
  document.write("</tr>");
}

document.write("</table>");
