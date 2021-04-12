let i
let j
let tbl
tbl = "<table border='1' width='500' height='300' cellspacing='0' cellpadding='3'>"
for (j = 1; j <10; j++) {
    tbl = tbl + "<tr>"
    for (i = 2; i <10; i++) {
        tbl = tbl + "<th>" + i + "x" + j + "=" + i * j + "</th>"
    }
    tbl = tbl + "</tr>"
}
tbl = tbl + "</table>"
document.write(tbl);