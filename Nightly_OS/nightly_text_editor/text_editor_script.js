//variables, which stand for the togglable focus values of the paragraphs
let focus_paragraph01 = false;
let focus_paragraph02 = false;
let focus_paragraph03 = false;
let focus_paragraph04 = false;

//if the focus is on the 1st paragraph
$("#paragraph01").on("dblclick", function()
{
    focus_paragraph01 = true;
    focus_paragraph02 = false;
    focus_paragraph03 = false;
    focus_paragraph04 = false;
});

//if the focus is on the 2nd paragraph
$("#paragraph02").on("dblclick", function()
{
    focus_paragraph01 = false;
    focus_paragraph02 = true;
    focus_paragraph03 = false;
    focus_paragraph04 = false;
});

//if the focus is on the 3rd paragraph
$("#paragraph03").on("dblclick", function()
{
    focus_paragraph01 = false;
    focus_paragraph02 = false;
    focus_paragraph03 = true;
    focus_paragraph04 = false;
});

//if the focus is on the 4th paragraph
$("#paragraph04").on("dblclick", function()
{
    focus_paragraph01 = false;
    focus_paragraph02 = false;
    focus_paragraph03 = false;
    focus_paragraph04 = true;
});

//load saved value
document.getElementById("paragraph01").innerHTML = localStorage.getItem("paragraph_first");
document.getElementById("paragraph02").innerHTML = localStorage.getItem("paragraph_second");
document.getElementById("paragraph03").innerHTML = localStorage.getItem("paragraph_third");
document.getElementById("paragraph04").innerHTML = localStorage.getItem("paragraph_forth");

//save new value
setInterval(function() {
    localStorage.setItem("paragraph_first", document.getElementById("paragraph01").innerHTML);
    localStorage.setItem("paragraph_second", document.getElementById("paragraph02").innerHTML);
    localStorage.setItem("paragraph_third", document.getElementById("paragraph03").innerHTML);
    localStorage.setItem("paragraph_forth", document.getElementById("paragraph04").innerHTML);
}, 200);

//Doesn't work for this text editor, because it is a subpage
$("#header_button1").on("click", function()
{
    alert("Not working!");
});

//Doesn't work for this text editor, because it is a subpage
$("#header_button2").on("click", function()
{
    alert("Not working!");
});

//Returns the user to the desktop
$("#header_button3").on("click", function()
{
    window.location.href = "../nightly_main/desktop.html";
});

//this stands for unselected text, in this case everything is affected
/*$("#bold_weight").on("click", function()
{
    $(".editor_interface").css("font-weight", "bold");
})

$("#bold_weight").on("dblclick", function()
{
    $(".editor_interface").css("font-weight", "normal");
})*/

//execCommand is deprecated, but the alternative of it is not
//ready yet, so this has to be used to do the edit on the selection
//if the user changes the font style to bold
function font_to_Bold()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.fontWeight = 'bold';
    document.execCommand('insertHTML', false, span.outerHTML);
    if(focus_paragraph01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("paragraph_first", text01);
        console.log(localStorage.getItem("paragraph_first"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("paragraph_first");
    }
    else if(focus_paragraph02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("paragraph_second", text02);
        console.log(localStorage.getItem("paragraph_second"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("paragraph_second");
    }
    else if(focus_paragraph03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("paragraph_third", text03);
        console.log(localStorage.getItem("paragraph_third"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("paragraph_third");
    }
    else if(focus_paragraph04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("paragraph_forth", text04);
        console.log(localStorage.getItem("paragraph_forth"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("paragraph_forth");
    }
}

//if the user changes the font style to italic
function font_to_Italic()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.fontStyle = 'italic';
    document.execCommand('insertHTML', false, span.outerHTML);
    if(focus_paragraph01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("paragraph_first", text01);
        console.log(localStorage.getItem("paragraph_first"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("paragraph_first");
    }
    else if(focus_paragraph02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("paragraph_second", text02);
        console.log(localStorage.getItem("paragraph_second"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("paragraph_second");
    }
    else if(focus_paragraph03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("paragraph_third", text03);
        console.log(localStorage.getItem("paragraph_third"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("paragraph_third");
    }
    else if(focus_paragraph04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("paragraph_forth", text04);
        console.log(localStorage.getItem("paragraph_forth"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("paragraph_forth");
    }
}

//if the user changes the font style to underscore
function font_to_Underscore()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.textDecoration = 'underline';
    document.execCommand('insertHTML', false, span.outerHTML);
    if(focus_paragraph01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("paragraph_first", text01);
        console.log(localStorage.getItem("paragraph_first"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("paragraph_first");
    }
    else if(focus_paragraph02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("paragraph_second", text02);
        console.log(localStorage.getItem("paragraph_second"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("paragraph_second");
    }
    else if(focus_paragraph03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("paragraph_third", text03);
        console.log(localStorage.getItem("paragraph_third"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("paragraph_third");
    }
    else if(focus_paragraph04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("paragraph_forth", text04);
        console.log(localStorage.getItem("paragraph_forth"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("paragraph_forth");
    }
}

//if the user changes the font align to left
function text_align_to_Left()
{
    if(focus_paragraph01 == true)
    {
        $("#paragraph01").css("text-align", "left");
        let text01 = document.getElementById("paragraph01").innerHTML;
        localStorage.setItem("paragraph_first", text01);
        console.log(localStorage.getItem("paragraph_first"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("paragraph_first");
    }
    else if(focus_paragraph02 == true)
    {
        $("#paragraph02").css("text-align", "left");
        let text02 = document.getElementById("paragraph02").innerHTML;
        localStorage.setItem("paragraph_second", text02);
        console.log(localStorage.getItem("paragraph_second"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("paragraph_second");
    }
    else if(focus_paragraph03 == true)
    {
        $("#paragraph03").css("text-align", "left");
        let text03 = document.getElementById("paragraph03").innerHTML;
        localStorage.setItem("paragraph_third", text03);
        console.log(localStorage.getItem("paragraph_third"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("paragraph_third");
    }
    else if(focus_paragraph04 == true)
    {
        $("#paragraph04").css("text-align", "left");
        let text04 = document.getElementById("paragraph04").innerHTML;
        localStorage.setItem("paragraph_forth", text04);
        console.log(localStorage.getItem("paragraph_forth"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("paragraph_forth");
    }
}

//if the user changes the font align to center
function text_align_to_Center()
{
    if(focus_paragraph01 == true)
    {
        $("#paragraph01").css("text-align", "center");
        let text01 = document.getElementById("paragraph01").innerHTML;
        localStorage.setItem("paragraph_first", text01);
        console.log(localStorage.getItem("paragraph_first"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("paragraph_first");
    }
    else if(focus_paragraph02 == true)
    {
        $("#paragraph02").css("text-align", "center");
        let text02 = document.getElementById("paragraph02").innerHTML;
        localStorage.setItem("paragraph_second", text02);
        console.log(localStorage.getItem("paragraph_second"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("paragraph_second");
    }
    else if(focus_paragraph03 == true)
    {
        $("#paragraph03").css("text-align", "center");
        let text03 = document.getElementById("paragraph03").innerHTML;
        localStorage.setItem("paragraph_third", text03);
        console.log(localStorage.getItem("paragraph_third"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("paragraph_third");        
    }
    else if(focus_paragraph04 == true)
    {
        $("#paragraph04").css("text-align", "center");
        let text04 = document.getElementById("paragraph04").innerHTML;
        localStorage.setItem("paragraph_forth", text04);
        console.log(localStorage.getItem("paragraph_forth"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("paragraph_forth");        
    }
}

//if the user changes the font align to right
function text_align_to_Right()
{
    /*const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.textAlign = 'right';
    document.execCommand('insertHTML', false, span.outerHTML);*/
    
    //$(".editor_interface").css("text-align", "right");
    if(focus_paragraph01 == true)
    {
        $("#paragraph01").css("text-align", "right");
        let text01 = document.getElementById("paragraph01").innerHTML;
        localStorage.setItem("paragraph_first", text01);
        console.log(localStorage.getItem("paragraph_first"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("paragraph_first");
    }
    else if(focus_paragraph02 == true)
    {
        $("#paragraph02").css("text-align", "right");
        let text02 = document.getElementById("paragraph02").innerHTML;
        localStorage.setItem("paragraph_second", text02);
        console.log(localStorage.getItem("paragraph_second"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("paragraph_second");        
    }
    else if(focus_paragraph03 == true)
    {
        $("#paragraph03").css("text-align", "right");
        let text03 = document.getElementById("paragraph03").innerHTML;
        localStorage.setItem("paragraph_third", text03);
        console.log(localStorage.getItem("paragraph_third"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("paragraph_third");          
    }
    else if(focus_paragraph04 == true)
    {
        $("#paragraph04").css("text-align", "right");
        let text04 = document.getElementById("paragraph04").innerHTML;
        localStorage.setItem("paragraph_forth", text04);
        console.log(localStorage.getItem("paragraph_forth"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("paragraph_forth");        
    }
}

//if the user changes the font size to 18px
function font_to_18px()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.fontSize = '18px';
    document.execCommand('insertHTML', false, span.outerHTML);
    if(focus_paragraph01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("paragraph_first", text01);
        console.log(localStorage.getItem("paragraph_first"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("paragraph_first");
    }
    else if(focus_paragraph02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("paragraph_second", text02);
        console.log(localStorage.getItem("paragraph_second"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("paragraph_second");
    }
    else if(focus_paragraph03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("paragraph_third", text03);
        console.log(localStorage.getItem("paragraph_third"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("paragraph_third");
    }
    else if(focus_paragraph04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("paragraph_forth", text04);
        console.log(localStorage.getItem("paragraph_forth"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("paragraph_forth");
    }
}

//if the user changes the font size to 20px
function font_to_20px()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.fontSize = '20px';
    document.execCommand('insertHTML', false, span.outerHTML);
    if(focus_paragraph01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("paragraph_first", text01);
        console.log(localStorage.getItem("paragraph_first"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("paragraph_first");
    }
    else if(focus_paragraph02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("paragraph_second", text02);
        console.log(localStorage.getItem("paragraph_second"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("paragraph_second");
    }
    else if(focus_paragraph03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("paragraph_third", text03);
        console.log(localStorage.getItem("paragraph_third"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("paragraph_third");
    }
    else if(focus_paragraph04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("paragraph_forth", text04);
        console.log(localStorage.getItem("paragraph_forth"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("paragraph_forth");
    }
}

//if the user changes the font size to 22px
function font_to_22px()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.fontSize = '22px';
    document.execCommand('insertHTML', false, span.outerHTML);
    if(focus_paragraph01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("paragraph_first", text01);
        console.log(localStorage.getItem("paragraph_first"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("paragraph_first");
    }
    else if(focus_paragraph02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("paragraph_second", text02);
        console.log(localStorage.getItem("paragraph_second"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("paragraph_second");
    }
    else if(focus_paragraph03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("paragraph_third", text03);
        console.log(localStorage.getItem("paragraph_third"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("paragraph_third");
    }
    else if(focus_paragraph04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("paragraph_forth", text04);
        console.log(localStorage.getItem("paragraph_forth"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("paragraph_forth");
    }
}

//if the user changes the font size to 24px
function font_to_24px()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.fontSize = '24px';
    document.execCommand('insertHTML', false, span.outerHTML);
    if(focus_paragraph01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("paragraph_first", text01);
        console.log(localStorage.getItem("paragraph_first"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("paragraph_first");
    }
    else if(focus_paragraph02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("paragraph_second", text02);
        console.log(localStorage.getItem("paragraph_second"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("paragraph_second");
    }
    else if(focus_paragraph03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("paragraph_third", text03);
        console.log(localStorage.getItem("paragraph_third"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("paragraph_third");
    }
    else if(focus_paragraph04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("paragraph_forth", text04);
        console.log(localStorage.getItem("paragraph_forth"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("paragraph_forth");
    }
}

//if the user changes the font size to 36px
function font_to_36px()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.fontSize = '36px';
    document.execCommand('insertHTML', false, span.outerHTML);
    if(focus_paragraph01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("paragraph_first", text01);
        console.log(localStorage.getItem("paragraph_first"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("paragraph_first");
    }
    else if(focus_paragraph02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("paragraph_second", text02);
        console.log(localStorage.getItem("paragraph_second"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("paragraph_second");
    }
    else if(focus_paragraph03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("paragraph_third", text03);
        console.log(localStorage.getItem("paragraph_third"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("paragraph_third");
    }
    else if(focus_paragraph04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("paragraph_forth", text04);
        console.log(localStorage.getItem("paragraph_forth"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("paragraph_forth");
    }
}

//if the user changes the font size to 48px
function font_to_48px()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.fontSize = '48px';
    document.execCommand('insertHTML', false, span.outerHTML);
    if(focus_paragraph01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("paragraph_first", text01);
        console.log(localStorage.getItem("paragraph_first"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("paragraph_first");
    }
    else if(focus_paragraph02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("paragraph_second", text02);
        console.log(localStorage.getItem("paragraph_second"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("paragraph_second");
    }
    else if(focus_paragraph03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("paragraph_third", text03);
        console.log(localStorage.getItem("paragraph_third"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("paragraph_third");
    }
    else if(focus_paragraph04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("paragraph_forth", text04);
        console.log(localStorage.getItem("paragraph_forth"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("paragraph_forth");
    }
}

//if the user changes the font background to red
function font_background_to_Red()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.background = 'red';
    document.execCommand('insertHTML', false, span.outerHTML);
    if(focus_paragraph01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("paragraph_first", text01);
        console.log(localStorage.getItem("paragraph_first"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("paragraph_first");
    }
    else if(focus_paragraph02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("paragraph_second", text02);
        console.log(localStorage.getItem("paragraph_second"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("paragraph_second");
    }
    else if(focus_paragraph03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("paragraph_third", text03);
        console.log(localStorage.getItem("paragraph_third"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("paragraph_third");
    }
    else if(focus_paragraph04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("paragraph_forth", text04);
        console.log(localStorage.getItem("paragraph_forth"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("paragraph_forth");
    }
}

//if the user changes the font background to green
function font_background_to_Green()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.background = 'green';
    document.execCommand('insertHTML', false, span.outerHTML);
    if(focus_paragraph01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("paragraph_first", text01);
        console.log(localStorage.getItem("paragraph_first"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("paragraph_first");
    }
    else if(focus_paragraph02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("paragraph_second", text02);
        console.log(localStorage.getItem("paragraph_second"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("paragraph_second");
    }
    else if(focus_paragraph03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("paragraph_third", text03);
        console.log(localStorage.getItem("paragraph_third"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("paragraph_third");
    }
    else if(focus_paragraph04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("paragraph_forth", text04);
        console.log(localStorage.getItem("paragraph_forth"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("paragraph_forth");
    }
}

//if the user changes the font background to blue
function font_background_to_Blue()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.background = 'blue';
    document.execCommand('insertHTML', false, span.outerHTML);
    if(focus_paragraph01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("paragraph_first", text01);
        console.log(localStorage.getItem("paragraph_first"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("paragraph_first");
    }
    else if(focus_paragraph02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("paragraph_second", text02);
        console.log(localStorage.getItem("paragraph_second"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("paragraph_second");
    }
    else if(focus_paragraph03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("paragraph_third", text03);
        console.log(localStorage.getItem("paragraph_third"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("paragraph_third");
    }
    else if(focus_paragraph04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("paragraph_forth", text04);
        console.log(localStorage.getItem("paragraph_forth"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("paragraph_forth");
    }
}

//if the user changes the font background to yellow
function font_background_to_Yellow()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.background = 'yellow';
    document.execCommand('insertHTML', false, span.outerHTML);
    if(focus_paragraph01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("paragraph_first", text01);
        console.log(localStorage.getItem("paragraph_first"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("paragraph_first");
    }
    else if(focus_paragraph02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("paragraph_second", text02);
        console.log(localStorage.getItem("paragraph_second"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("paragraph_second");
    }
    else if(focus_paragraph03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("paragraph_third", text03);
        console.log(localStorage.getItem("paragraph_third"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("paragraph_third");
    }
    else if(focus_paragraph04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("paragraph_forth", text04);
        console.log(localStorage.getItem("paragraph_forth"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("paragraph_forth");
    }
}

//if the user changes the font background to brown
function font_background_to_Brown()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.background = 'brown';
    document.execCommand('insertHTML', false, span.outerHTML);
    if(focus_paragraph01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("paragraph_first", text01);
        console.log(localStorage.getItem("paragraph_first"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("paragraph_first");
    }
    else if(focus_paragraph02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("paragraph_second", text02);
        console.log(localStorage.getItem("paragraph_second"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("paragraph_second");
    }
    else if(focus_paragraph03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("paragraph_third", text03);
        console.log(localStorage.getItem("paragraph_third"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("paragraph_third");
    }
    else if(focus_paragraph04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("paragraph_forth", text04);
        console.log(localStorage.getItem("paragraph_forth"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("paragraph_forth");
    }    
}

//if the user changes the font background to orange
function font_background_to_Orange()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.background = 'orange';
    document.execCommand('insertHTML', false, span.outerHTML);
    if(focus_paragraph01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("paragraph_first", text01);
        console.log(localStorage.getItem("paragraph_first"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("paragraph_first");
    }
    else if(focus_paragraph02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("paragraph_second", text02);
        console.log(localStorage.getItem("paragraph_second"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("paragraph_second");
    }
    else if(focus_paragraph03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("paragraph_third", text03);
        console.log(localStorage.getItem("paragraph_third"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("paragraph_third");
    }
    else if(focus_paragraph04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("paragraph_forth", text04);
        console.log(localStorage.getItem("paragraph_forth"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("paragraph_forth");
    }    
}

//if the user changes the font background to purple
function font_background_to_Purple()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.background = 'purple';
    document.execCommand('insertHTML', false, span.outerHTML);
    if(focus_paragraph01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("paragraph_first", text01);
        console.log(localStorage.getItem("paragraph_first"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("paragraph_first");
    }
    else if(focus_paragraph02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("paragraph_second", text02);
        console.log(localStorage.getItem("paragraph_second"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("paragraph_second");
    }
    else if(focus_paragraph03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("paragraph_third", text03);
        console.log(localStorage.getItem("paragraph_third"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("paragraph_third");
    }
    else if(focus_paragraph04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("paragraph_forth", text04);
        console.log(localStorage.getItem("paragraph_forth"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("paragraph_forth");
    }    
}

//if the user changes the font background to gray
function font_background_to_Gray()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.background = 'gray';
    document.execCommand('insertHTML', false, span.outerHTML);
    if(focus_paragraph01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("paragraph_first", text01);
        console.log(localStorage.getItem("paragraph_first"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("paragraph_first");
    }
    else if(focus_paragraph02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("paragraph_second", text02);
        console.log(localStorage.getItem("paragraph_second"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("paragraph_second");
    }
    else if(focus_paragraph03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("paragraph_third", text03);
        console.log(localStorage.getItem("paragraph_third"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("paragraph_third");
    }
    else if(focus_paragraph04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("paragraph_forth", text04);
        console.log(localStorage.getItem("paragraph_forth"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("paragraph_forth");
    }    
}

//if the user changes the font color to red
function font_to_Red()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.color = 'red';
    document.execCommand('insertHTML', false, span.outerHTML);
    if(focus_paragraph01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("paragraph_first", text01);
        console.log(localStorage.getItem("paragraph_first"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("paragraph_first");
    }
    else if(focus_paragraph02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("paragraph_second", text02);
        console.log(localStorage.getItem("paragraph_second"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("paragraph_second");
    }
    else if(focus_paragraph03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("paragraph_third", text03);
        console.log(localStorage.getItem("paragraph_third"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("paragraph_third");
    }
    else if(focus_paragraph04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("paragraph_forth", text04);
        console.log(localStorage.getItem("paragraph_forth"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("paragraph_forth");
    }    
}

//if the user changes the font color to green
function font_to_Green()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.color = 'green';
    document.execCommand('insertHTML', false, span.outerHTML);
    if(focus_paragraph01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("paragraph_first", text01);
        console.log(localStorage.getItem("paragraph_first"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("paragraph_first");
    }
    else if(focus_paragraph02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("paragraph_second", text02);
        console.log(localStorage.getItem("paragraph_second"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("paragraph_second");
    }
    else if(focus_paragraph03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("paragraph_third", text03);
        console.log(localStorage.getItem("paragraph_third"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("paragraph_third");
    }
    else if(focus_paragraph04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("paragraph_forth", text04);
        console.log(localStorage.getItem("paragraph_forth"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("paragraph_forth");
    }    
}

//if the user changes the font color to blue
function font_to_Blue()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.color = 'blue';
    document.execCommand('insertHTML', false, span.outerHTML);
    if(focus_paragraph01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("paragraph_first", text01);
        console.log(localStorage.getItem("paragraph_first"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("paragraph_first");
    }
    else if(focus_paragraph02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("paragraph_second", text02);
        console.log(localStorage.getItem("paragraph_second"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("paragraph_second");
    }
    else if(focus_paragraph03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("paragraph_third", text03);
        console.log(localStorage.getItem("paragraph_third"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("paragraph_third");
    }
    else if(focus_paragraph04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("paragraph_forth", text04);
        console.log(localStorage.getItem("paragraph_forth"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("paragraph_forth");
    }    
}

//if the user changes the font color to yellow
function font_to_Yellow()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.color = 'yellow';
    document.execCommand('insertHTML', false, span.outerHTML);
    if(focus_paragraph01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("paragraph_first", text01);
        console.log(localStorage.getItem("paragraph_first"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("paragraph_first");
    }
    else if(focus_paragraph02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("paragraph_second", text02);
        console.log(localStorage.getItem("paragraph_second"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("paragraph_second");
    }
    else if(focus_paragraph03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("paragraph_third", text03);
        console.log(localStorage.getItem("paragraph_third"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("paragraph_third");
    }
    else if(focus_paragraph04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("paragraph_forth", text04);
        console.log(localStorage.getItem("paragraph_forth"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("paragraph_forth");
    }    
}

//if the user changes the font color to brown
function font_to_Brown()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.color = 'brown';
    document.execCommand('insertHTML', false, span.outerHTML);
    if(focus_paragraph01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("paragraph_first", text01);
        console.log(localStorage.getItem("paragraph_first"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("paragraph_first");
    }
    else if(focus_paragraph02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("paragraph_second", text02);
        console.log(localStorage.getItem("paragraph_second"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("paragraph_second");
    }
    else if(focus_paragraph03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("paragraph_third", text03);
        console.log(localStorage.getItem("paragraph_third"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("paragraph_third");
    }
    else if(focus_paragraph04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("paragraph_forth", text04);
        console.log(localStorage.getItem("paragraph_forth"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("paragraph_forth");
    }    
}

//if the user changes the font color to orange
function font_to_Orange()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.color = 'orange';
    document.execCommand('insertHTML', false, span.outerHTML);
    if(focus_paragraph01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("paragraph_first", text01);
        console.log(localStorage.getItem("paragraph_first"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("paragraph_first");
    }
    else if(focus_paragraph02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("paragraph_second", text02);
        console.log(localStorage.getItem("paragraph_second"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("paragraph_second");
    }
    else if(focus_paragraph03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("paragraph_third", text03);
        console.log(localStorage.getItem("paragraph_third"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("paragraph_third");
    }
    else if(focus_paragraph04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("paragraph_forth", text04);
        console.log(localStorage.getItem("paragraph_forth"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("paragraph_forth");
    }
}

//if the user changes the font color to purple
function font_to_Purple()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.color = 'purple';
    document.execCommand('insertHTML', false, span.outerHTML);
    if(focus_paragraph01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("paragraph_first", text01);
        console.log(localStorage.getItem("paragraph_first"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("paragraph_first");
    }
    else if(focus_paragraph02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("paragraph_second", text02);
        console.log(localStorage.getItem("paragraph_second"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("paragraph_second");
    }
    else if(focus_paragraph03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("paragraph_third", text03);
        console.log(localStorage.getItem("paragraph_third"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("paragraph_third");
    }
    else if(focus_paragraph04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("paragraph_forth", text04);
        console.log(localStorage.getItem("paragraph_forth"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("paragraph_forth");
    }    
}

//if the user changes the font color to gray
function font_to_Gray()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.color = 'gray';
    document.execCommand('insertHTML', false, span.outerHTML);
    if(focus_paragraph01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("paragraph_first", text01);
        console.log(localStorage.getItem("paragraph_first"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("paragraph_first");
    }
    else if(focus_paragraph02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("paragraph_second", text02);
        console.log(localStorage.getItem("paragraph_second"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("paragraph_second");
    }
    else if(focus_paragraph03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("paragraph_third", text03);
        console.log(localStorage.getItem("paragraph_third"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("paragraph_third");
    }
    else if(focus_paragraph04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("paragraph_forth", text04);
        console.log(localStorage.getItem("paragraph_forth"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("paragraph_forth");
    }    
}

//if the user changes the font family to Times New Roman
function font_to_Times_New_Roman()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.fontFamily = 'Times New Roman';
    document.execCommand('insertHTML', false, span.outerHTML);
    if(focus_paragraph01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("paragraph_first", text01);
        console.log(localStorage.getItem("paragraph_first"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("paragraph_first");
    }
    else if(focus_paragraph02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("paragraph_second", text02);
        console.log(localStorage.getItem("paragraph_second"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("paragraph_second");
    }
    else if(focus_paragraph03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("paragraph_third", text03);
        console.log(localStorage.getItem("paragraph_third"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("paragraph_third");
    }
    else if(focus_paragraph04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("paragraph_forth", text04);
        console.log(localStorage.getItem("paragraph_forth"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("paragraph_forth");
    }    
}

//if the user changes the font family to Georgia
function font_to_Georgia()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.fontFamily = 'Georgia';
    document.execCommand('insertHTML', false, span.outerHTML);
    if(focus_paragraph01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("paragraph_first", text01);
        console.log(localStorage.getItem("paragraph_first"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("paragraph_first");
    }
    else if(focus_paragraph02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("paragraph_second", text02);
        console.log(localStorage.getItem("paragraph_second"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("paragraph_second");
    }
    else if(focus_paragraph03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("paragraph_third", text03);
        console.log(localStorage.getItem("paragraph_third"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("paragraph_third");
    }
    else if(focus_paragraph04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("paragraph_forth", text04);
        console.log(localStorage.getItem("paragraph_forth"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("paragraph_forth");
    }    
}

//if the user changes the font family to Garamond
function font_to_Garamond()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.fontFamily = 'Garamond';
    document.execCommand('insertHTML', false, span.outerHTML);
    if(focus_paragraph01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("paragraph_first", text01);
        console.log(localStorage.getItem("paragraph_first"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("paragraph_first");
    }
    else if(focus_paragraph02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("paragraph_second", text02);
        console.log(localStorage.getItem("paragraph_second"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("paragraph_second");
    }
    else if(focus_paragraph03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("paragraph_third", text03);
        console.log(localStorage.getItem("paragraph_third"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("paragraph_third");
    }
    else if(focus_paragraph04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("paragraph_forth", text04);
        console.log(localStorage.getItem("paragraph_forth"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("paragraph_forth");
    }    
}

//if the user changes the font family to Arial
function font_to_Arial()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.fontFamily = 'Arial';
    document.execCommand('insertHTML', false, span.outerHTML);
    if(focus_paragraph01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("paragraph_first", text01);
        console.log(localStorage.getItem("paragraph_first"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("paragraph_first");
    }
    else if(focus_paragraph02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("paragraph_second", text02);
        console.log(localStorage.getItem("paragraph_second"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("paragraph_second");
    }
    else if(focus_paragraph03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("paragraph_third", text03);
        console.log(localStorage.getItem("paragraph_third"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("paragraph_third");
    }
    else if(focus_paragraph04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("paragraph_forth", text04);
        console.log(localStorage.getItem("paragraph_forth"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("paragraph_forth");
    }    
}

//if the user changes the font family to Verdana
function font_to_Verdana()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.fontFamily = 'Verdana';
    document.execCommand('insertHTML', false, span.outerHTML);
    if(focus_paragraph01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("paragraph_first", text01);
        console.log(localStorage.getItem("paragraph_first"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("paragraph_first");
    }
    else if(focus_paragraph02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("paragraph_second", text02);
        console.log(localStorage.getItem("paragraph_second"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("paragraph_second");
    }
    else if(focus_paragraph03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("paragraph_third", text03);
        console.log(localStorage.getItem("paragraph_third"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("paragraph_third");
    }
    else if(focus_paragraph04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("paragraph_forth", text04);
        console.log(localStorage.getItem("paragraph_forth"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("paragraph_forth");
    }    
}

//if the user changes the font family to Helvetica
function font_to_Helvetica()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.fontFamily = 'Helvetica';
    document.execCommand('insertHTML', false, span.outerHTML);
    if(focus_paragraph01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("paragraph_first", text01);
        console.log(localStorage.getItem("paragraph_first"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("paragraph_first");
    }
    else if(focus_paragraph02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("paragraph_second", text02);
        console.log(localStorage.getItem("paragraph_second"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("paragraph_second");
    }
    else if(focus_paragraph03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("paragraph_third", text03);
        console.log(localStorage.getItem("paragraph_third"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("paragraph_third");
    }
    else if(focus_paragraph04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("paragraph_forth", text04);
        console.log(localStorage.getItem("paragraph_forth"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("paragraph_forth");
    }    
}

//if the user changes the font family to Courier New
function font_to_Courier_New()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.fontFamily = 'Courier New';
    document.execCommand('insertHTML', false, span.outerHTML);
    if(focus_paragraph01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("paragraph_first", text01);
        console.log(localStorage.getItem("paragraph_first"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("paragraph_first");
    }
    else if(focus_paragraph02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("paragraph_second", text02);
        console.log(localStorage.getItem("paragraph_second"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("paragraph_second");
    }
    else if(focus_paragraph03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("paragraph_third", text03);
        console.log(localStorage.getItem("paragraph_third"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("paragraph_third");
    }
    else if(focus_paragraph04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("paragraph_forth", text04);
        console.log(localStorage.getItem("paragraph_forth"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("paragraph_forth");
    }    
}

//if the user changes the font family to Monaco
function font_to_Monaco()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.fontFamily = 'Monaco';
    document.execCommand('insertHTML', false, span.outerHTML);
    if(focus_paragraph01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("paragraph_first", text01);
        console.log(localStorage.getItem("paragraph_first"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("paragraph_first");
    }
    else if(focus_paragraph02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("paragraph_second", text02);
        console.log(localStorage.getItem("paragraph_second"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("paragraph_second");
    }
    else if(focus_paragraph03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("paragraph_third", text03);
        console.log(localStorage.getItem("paragraph_third"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("paragraph_third");
    }
    else if(focus_paragraph04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("paragraph_forth", text04);
        console.log(localStorage.getItem("paragraph_forth"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("paragraph_forth");
    }    
}

//if the user changes the font family to Brush Script MT
function font_to_Brush_Script_MT()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.fontFamily = 'Brush Script MT';
    document.execCommand('insertHTML', false, span.outerHTML);
    if(focus_paragraph01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("paragraph_first", text01);
        console.log(localStorage.getItem("paragraph_first"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("paragraph_first");
    }
    else if(focus_paragraph02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("paragraph_second", text02);
        console.log(localStorage.getItem("paragraph_second"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("paragraph_second");
    }
    else if(focus_paragraph03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("paragraph_third", text03);
        console.log(localStorage.getItem("paragraph_third"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("paragraph_third");
    }
    else if(focus_paragraph04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("paragraph_forth", text04);
        console.log(localStorage.getItem("paragraph_forth"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("paragraph_forth");
    }    
}

//if the user changes the font family to Lucida Handwriting
function font_to_Lucida_Handwriting()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.fontFamily = 'Lucida Handwriting';
    document.execCommand('insertHTML', false, span.outerHTML);
    if(focus_paragraph01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("paragraph_first", text01);
        console.log(localStorage.getItem("paragraph_first"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("paragraph_first");
    }
    else if(focus_paragraph02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("paragraph_second", text02);
        console.log(localStorage.getItem("paragraph_second"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("paragraph_second");
    }
    else if(focus_paragraph03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("paragraph_third", text03);
        console.log(localStorage.getItem("paragraph_third"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("paragraph_third");
    }
    else if(focus_paragraph04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("paragraph_forth", text04);
        console.log(localStorage.getItem("paragraph_forth"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("paragraph_forth");
    }    
}

//if the user changes the font family to Copperplate
function font_to_Copperplate()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.fontFamily = 'Copperplate';
    document.execCommand('insertHTML', false, span.outerHTML);
    if(focus_paragraph01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("paragraph_first", text01);
        console.log(localStorage.getItem("paragraph_first"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("paragraph_first");
    }
    else if(focus_paragraph02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("paragraph_second", text02);
        console.log(localStorage.getItem("paragraph_second"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("paragraph_second");
    }
    else if(focus_paragraph03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("paragraph_third", text03);
        console.log(localStorage.getItem("paragraph_third"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("paragraph_third");
    }
    else if(focus_paragraph04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("paragraph_forth", text04);
        console.log(localStorage.getItem("paragraph_forth"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("paragraph_forth");
    }    
}

//if the user changes the font family to Papyrus
function font_to_Papyrus()
{
    const text = window.getSelection().toString();
    var span = document.createElement('span');
    span.innerHTML = text;
    span.style.fontFamily = 'Papyrus';
    document.execCommand('insertHTML', false, span.outerHTML);
    if(focus_paragraph01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("paragraph_first", text01);
        console.log(localStorage.getItem("paragraph_first"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("paragraph_first");
    }
    else if(focus_paragraph02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("paragraph_second", text02);
        console.log(localStorage.getItem("paragraph_second"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("paragraph_second");
    }
    else if(focus_paragraph03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("paragraph_third", text03);
        console.log(localStorage.getItem("paragraph_third"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("paragraph_third");
    }
    else if(focus_paragraph04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("paragraph_forth", text04);
        console.log(localStorage.getItem("paragraph_forth"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("paragraph_forth");
    }    
}