//variables, which stand for the togglable focus values of the paragraphs
let focus_slide_element01 = false;
let focus_slide_element02 = false;
let focus_slide_element03 = false;
let focus_slide_element04 = false;
let focus_slide_element05 = false;
let focus_slide_element06 = false;

//if the focus is on the 1st slide element
$("#slide1_title").on("dblclick", function()
{
    focus_slide_element01 = true;
    focus_slide_element02 = false;
    focus_slide_element03 = false;
    focus_slide_element04 = false;
    focus_slide_element05 = false;
    focus_slide_element06 = false;
});

//if the focus is on the 2nd slide element
$("#slide1_text").on("dblclick", function()
{
    focus_slide_element01 = false;
    focus_slide_element02 = true;
    focus_slide_element03 = false;
    focus_slide_element04 = false;
    focus_slide_element05 = false;
    focus_slide_element06 = false;
});

//if the focus is on the 3rd slide element
$("#slide2_title").on("dblclick", function()
{
    focus_slide_element01 = false;
    focus_slide_element02 = false;
    focus_slide_element03 = true;
    focus_slide_element04 = false;
    focus_slide_element05 = false;
    focus_slide_element06 = false;
});

//if the focus is on the 4th slide element
$("#slide2_text").on("dblclick", function()
{
    focus_slide_element01 = false;
    focus_slide_element02 = false;
    focus_slide_element03 = false;
    focus_slide_element04 = true;
    focus_slide_element05 = false;
    focus_slide_element06 = false;
});

//if the focus is on the 5th slide element
$("#slide3_title").on("dblclick", function()
{
    focus_slide_element01 = false;
    focus_slide_element02 = false;
    focus_slide_element03 = false;
    focus_slide_element04 = false;
    focus_slide_element05 = true;
    focus_slide_element06 = false;
});

//if the focus is on the 6th slide element
$("#slide_image").on("dblclick", function()
{
    focus_slide_element01 = false;
    focus_slide_element02 = false;
    focus_slide_element03 = false;
    focus_slide_element04 = false;
    focus_slide_element05 = false;
    focus_slide_element06 = true;
});

//load saved value
document.getElementById("slide1_title").innerHTML = localStorage.getItem("slide_element1");
document.getElementById("slide1_text").innerHTML = localStorage.getItem("slide_element2");
document.getElementById("slide2_title").innerHTML = localStorage.getItem("slide_element3");
document.getElementById("slide2_text").innerHTML = localStorage.getItem("slide_element4");
document.getElementById("slide3_title").innerHTML = localStorage.getItem("slide_element5");

//save new value
setInterval(function() {
    localStorage.setItem("slide_element1", document.getElementById("slide1_title").innerHTML);
    localStorage.setItem("slide_element2", document.getElementById("slide1_text").innerHTML);
    localStorage.setItem("slide_element3", document.getElementById("slide2_title").innerHTML);
    localStorage.setItem("slide_element4", document.getElementById("slide2_text").innerHTML);
    localStorage.setItem("slide_element5", document.getElementById("slide3_title").innerHTML);
}, 200);

//Doesn't work for this presentation editor, because it is a subpage
$("#header_button1").on("click", function()
{
    alert("Not working!");
});

//Doesn't work for this presentation editor, because it is a subpage
$("#header_button2").on("click", function()
{
    alert("Not working!");
});

//Returns the user to the desktop
$("#header_button3").on("click", function()
{
    window.location.href = "../nightly_main/desktop.html";
});

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
    if(focus_slide_element01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("slide_element1", text01);
        console.log(localStorage.getItem("slide_element1"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("slide_element1");
    }
    else if(focus_slide_element02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("slide_element2", text02);
        console.log(localStorage.getItem("slide_element2"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("slide_element2");
    }
    else if(focus_slide_element03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("slide_element3", text03);
        console.log(localStorage.getItem("slide_element3"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("slide_element3");
    }
    else if(focus_slide_element04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("slide_element4", text04);
        console.log(localStorage.getItem("slide_element4"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("slide_element4");
    }
    else if(focus_slide_element05 == true)
    {
        let text05 = span.innerHTML;
        localStorage.setItem("slide_element5", text05);
        console.log(localStorage.getItem("slide_element5"));
        console.log(span.innerHTML);
        text05 = localStorage.getItem("slide_element5");
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
    if(focus_slide_element01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("slide_element1", text01);
        console.log(localStorage.getItem("slide_element1"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("slide_element1");
    }
    else if(focus_slide_element02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("slide_element2", text02);
        console.log(localStorage.getItem("slide_element2"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("slide_element2");
    }
    else if(focus_slide_element03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("slide_element3", text03);
        console.log(localStorage.getItem("slide_element3"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("slide_element3");
    }
    else if(focus_slide_element04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("slide_element4", text04);
        console.log(localStorage.getItem("slide_element4"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("slide_element4");
    }
    else if(focus_slide_element05 == true)
    {
        let text05 = span.innerHTML;
        localStorage.setItem("slide_element5", text05);
        console.log(localStorage.getItem("slide_element5"));
        console.log(span.innerHTML);
        text05 = localStorage.getItem("slide_element5");
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
    if(focus_slide_element01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("slide_element1", text01);
        console.log(localStorage.getItem("slide_element1"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("slide_element1");
    }
    else if(focus_slide_element02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("slide_element2", text02);
        console.log(localStorage.getItem("slide_element2"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("slide_element2");
    }
    else if(focus_slide_element03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("slide_element3", text03);
        console.log(localStorage.getItem("slide_element3"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("slide_element3");
    }
    else if(focus_slide_element04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("slide_element4", text04);
        console.log(localStorage.getItem("slide_element4"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("slide_element4");
    }
    else if(focus_slide_element05 == true)
    {
        let text05 = span.innerHTML;
        localStorage.setItem("slide_element5", text05);
        console.log(localStorage.getItem("slide_element5"));
        console.log(span.innerHTML);
        text05 = localStorage.getItem("slide_element5");
    }    
}

//if the user changes the font align to left
function text_align_to_Left()
{
    if(focus_slide_element01 == true)
    {
        $("#slide1_title").css("text-align", "left");
        let text01 = document.getElementById("slide1_title").innerHTML;
        localStorage.setItem("slide_element1", text01);
        console.log(localStorage.getItem("slide_element1"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("slide_element1");
    }
    else if(focus_slide_element02 == true)
    {
        $("#slide1_text").css("text-align", "left");
        let text02 = document.getElementById("slide1_text").innerHTML;
        localStorage.setItem("slide_element2", text02);
        console.log(localStorage.getItem("slide_element2"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("slide_element2");
    }
    else if(focus_slide_element03 == true)
    {
        $("#slide2_title").css("text-align", "left");
        let text03 = document.getElementById("slide2_title").innerHTML;
        localStorage.setItem("slide_element3", text03);
        console.log(localStorage.getItem("slide_element3"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("slide_element3");
    }
    else if(focus_slide_element04 == true)
    {
        $("#slide2_text").css("text-align", "left");
        let text04 = document.getElementById("slide2_text").innerHTML;
        localStorage.setItem("slide_element4", text04);
        console.log(localStorage.getItem("slide_element4"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("slide_element4");
    }
    else if(focus_slide_element05 == true)
    {
        $("#slide3_title").css("text-align", "left");
        let text05 = document.getElementById("slide3_title").innerHTML;
        localStorage.setItem("slide_element5", text05);
        console.log(localStorage.getItem("slide_element5"));
        console.log(span.innerHTML);
        text05 = localStorage.getItem("slide_element5");
    }
}

//if the user changes the font align to center
function text_align_to_Center()
{
    if(focus_slide_element01 == true)
    {
        $("#slide1_title").css("text-align", "center");
        let text01 = document.getElementById("slide1_title").innerHTML;
        localStorage.setItem("slide_element1", text01);
        console.log(localStorage.getItem("slide_element1"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("slide_element1");
    }
    else if(focus_slide_element02 == true)
    {
        $("#slide1_text").css("text-align", "center");
        let text02 = document.getElementById("slide1_text").innerHTML;
        localStorage.setItem("slide_element2", text02);
        console.log(localStorage.getItem("slide_element2"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("slide_element2");
    }
    else if(focus_slide_element03 == true)
    {
        $("#slide2_title").css("text-align", "center");
        let text03 = document.getElementById("slide2_title").innerHTML;
        localStorage.setItem("slide_element3", text03);
        console.log(localStorage.getItem("slide_element3"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("slide_element3");
    }
    else if(focus_slide_element04 == true)
    {
        $("#slide2_text").css("text-align", "center");
        let text04 = document.getElementById("slide2_text").innerHTML;
        localStorage.setItem("slide_element4", text04);
        console.log(localStorage.getItem("slide_element4"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("slide_element4");
    }
    else if(focus_slide_element05 == true)
    {
        $("#slide3_title").css("text-align", "center");
        let text05 = document.getElementById("slide3_title").innerHTML;
        localStorage.setItem("slide_element5", text05);
        console.log(localStorage.getItem("slide_element5"));
        console.log(span.innerHTML);
        text05 = localStorage.getItem("slide_element5");
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
    if(focus_slide_element01 == true)
    {
        $("#slide1_title").css("text-align", "right");
        let text01 = document.getElementById("slide1_title").innerHTML;
        localStorage.setItem("slide_element1", text01);
        console.log(localStorage.getItem("slide_element1"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("slide_element1");
    }
    else if(focus_slide_element02 == true)
    {
        $("#slide1_text").css("text-align", "right");
        let text02 = document.getElementById("slide1_text").innerHTML;
        localStorage.setItem("slide_element2", text02);
        console.log(localStorage.getItem("slide_element2"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("slide_element2");
    }
    else if(focus_slide_element03 == true)
    {
        $("#slide2_title").css("text-align", "right");
        let text03 = document.getElementById("slide2_title").innerHTML;
        localStorage.setItem("slide_element3", text03);
        console.log(localStorage.getItem("slide_element3"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("slide_element3");
    }
    else if(focus_slide_element04 == true)
    {
        $("#slide2_text").css("text-align", "right");
        let text04 = document.getElementById("slide2_text").innerHTML;
        localStorage.setItem("slide_element4", text04);
        console.log(localStorage.getItem("slide_element4"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("slide_element4");
    }
    else if(focus_slide_element05 == true)
    {
        $("#slide3_title").css("text-align", "right");
        let text05 = document.getElementById("slide3_title").innerHTML;
        localStorage.setItem("slide_element5", text05);
        console.log(localStorage.getItem("slide_element5"));
        console.log(span.innerHTML);
        text05 = localStorage.getItem("slide_element5");
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
    if(focus_slide_element01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("slide_element1", text01);
        console.log(localStorage.getItem("slide_element1"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("slide_element1");
    }
    else if(focus_slide_element02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("slide_element2", text02);
        console.log(localStorage.getItem("slide_element2"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("slide_element2");
    }
    else if(focus_slide_element03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("slide_element3", text03);
        console.log(localStorage.getItem("slide_element3"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("slide_element3");
    }
    else if(focus_slide_element04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("slide_element4", text04);
        console.log(localStorage.getItem("slide_element4"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("slide_element4");
    }
    else if(focus_slide_element05 == true)
    {
        let text05 = span.innerHTML;
        localStorage.setItem("slide_element5", text05);
        console.log(localStorage.getItem("slide_element5"));
        console.log(span.innerHTML);
        text05 = localStorage.getItem("slide_element5");
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
    if(focus_slide_element01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("slide_element1", text01);
        console.log(localStorage.getItem("slide_element1"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("slide_element1");
    }
    else if(focus_slide_element02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("slide_element2", text02);
        console.log(localStorage.getItem("slide_element2"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("slide_element2");
    }
    else if(focus_slide_element03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("slide_element3", text03);
        console.log(localStorage.getItem("slide_element3"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("slide_element3");
    }
    else if(focus_slide_element04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("slide_element4", text04);
        console.log(localStorage.getItem("slide_element4"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("slide_element4");
    }
    else if(focus_slide_element05 == true)
    {
        let text05 = span.innerHTML;
        localStorage.setItem("slide_element5", text05);
        console.log(localStorage.getItem("slide_element5"));
        console.log(span.innerHTML);
        text05 = localStorage.getItem("slide_element5");
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
    if(focus_slide_element01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("slide_element1", text01);
        console.log(localStorage.getItem("slide_element1"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("slide_element1");
    }
    else if(focus_slide_element02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("slide_element2", text02);
        console.log(localStorage.getItem("slide_element2"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("slide_element2");
    }
    else if(focus_slide_element03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("slide_element3", text03);
        console.log(localStorage.getItem("slide_element3"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("slide_element3");
    }
    else if(focus_slide_element04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("slide_element4", text04);
        console.log(localStorage.getItem("slide_element4"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("slide_element4");
    }
    else if(focus_slide_element05 == true)
    {
        let text05 = span.innerHTML;
        localStorage.setItem("slide_element5", text05);
        console.log(localStorage.getItem("slide_element5"));
        console.log(span.innerHTML);
        text05 = localStorage.getItem("slide_element5");
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
    if(focus_slide_element01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("slide_element1", text01);
        console.log(localStorage.getItem("slide_element1"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("slide_element1");
    }
    else if(focus_slide_element02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("slide_element2", text02);
        console.log(localStorage.getItem("slide_element2"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("slide_element2");
    }
    else if(focus_slide_element03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("slide_element3", text03);
        console.log(localStorage.getItem("slide_element3"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("slide_element3");
    }
    else if(focus_slide_element04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("slide_element4", text04);
        console.log(localStorage.getItem("slide_element4"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("slide_element4");
    }
    else if(focus_slide_element05 == true)
    {
        let text05 = span.innerHTML;
        localStorage.setItem("slide_element5", text05);
        console.log(localStorage.getItem("slide_element5"));
        console.log(span.innerHTML);
        text05 = localStorage.getItem("slide_element5");
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
    if(focus_slide_element01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("slide_element1", text01);
        console.log(localStorage.getItem("slide_element1"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("slide_element1");
    }
    else if(focus_slide_element02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("slide_element2", text02);
        console.log(localStorage.getItem("slide_element2"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("slide_element2");
    }
    else if(focus_slide_element03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("slide_element3", text03);
        console.log(localStorage.getItem("slide_element3"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("slide_element3");
    }
    else if(focus_slide_element04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("slide_element4", text04);
        console.log(localStorage.getItem("slide_element4"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("slide_element4");
    }
    else if(focus_slide_element05 == true)
    {
        let text05 = span.innerHTML;
        localStorage.setItem("slide_element5", text05);
        console.log(localStorage.getItem("slide_element5"));
        console.log(span.innerHTML);
        text05 = localStorage.getItem("slide_element5");
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
    if(focus_slide_element01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("slide_element1", text01);
        console.log(localStorage.getItem("slide_element1"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("slide_element1");
    }
    else if(focus_slide_element02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("slide_element2", text02);
        console.log(localStorage.getItem("slide_element2"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("slide_element2");
    }
    else if(focus_slide_element03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("slide_element3", text03);
        console.log(localStorage.getItem("slide_element3"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("slide_element3");
    }
    else if(focus_slide_element04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("slide_element4", text04);
        console.log(localStorage.getItem("slide_element4"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("slide_element4");
    }
    else if(focus_slide_element05 == true)
    {
        let text05 = span.innerHTML;
        localStorage.setItem("slide_element5", text05);
        console.log(localStorage.getItem("slide_element5"));
        console.log(span.innerHTML);
        text05 = localStorage.getItem("slide_element5");
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
    if(focus_slide_element01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("slide_element1", text01);
        console.log(localStorage.getItem("slide_element1"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("slide_element1");
    }
    else if(focus_slide_element02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("slide_element2", text02);
        console.log(localStorage.getItem("slide_element2"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("slide_element2");
    }
    else if(focus_slide_element03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("slide_element3", text03);
        console.log(localStorage.getItem("slide_element3"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("slide_element3");
    }
    else if(focus_slide_element04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("slide_element4", text04);
        console.log(localStorage.getItem("slide_element4"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("slide_element4");
    }
    else if(focus_slide_element05 == true)
    {
        let text05 = span.innerHTML;
        localStorage.setItem("slide_element5", text05);
        console.log(localStorage.getItem("slide_element5"));
        console.log(span.innerHTML);
        text05 = localStorage.getItem("slide_element5");
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
    if(focus_slide_element01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("slide_element1", text01);
        console.log(localStorage.getItem("slide_element1"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("slide_element1");
    }
    else if(focus_slide_element02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("slide_element2", text02);
        console.log(localStorage.getItem("slide_element2"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("slide_element2");
    }
    else if(focus_slide_element03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("slide_element3", text03);
        console.log(localStorage.getItem("slide_element3"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("slide_element3");
    }
    else if(focus_slide_element04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("slide_element4", text04);
        console.log(localStorage.getItem("slide_element4"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("slide_element4");
    }
    else if(focus_slide_element05 == true)
    {
        let text05 = span.innerHTML;
        localStorage.setItem("slide_element5", text05);
        console.log(localStorage.getItem("slide_element5"));
        console.log(span.innerHTML);
        text05 = localStorage.getItem("slide_element5");
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
    if(focus_slide_element01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("slide_element1", text01);
        console.log(localStorage.getItem("slide_element1"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("slide_element1");
    }
    else if(focus_slide_element02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("slide_element2", text02);
        console.log(localStorage.getItem("slide_element2"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("slide_element2");
    }
    else if(focus_slide_element03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("slide_element3", text03);
        console.log(localStorage.getItem("slide_element3"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("slide_element3");
    }
    else if(focus_slide_element04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("slide_element4", text04);
        console.log(localStorage.getItem("slide_element4"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("slide_element4");
    }
    else if(focus_slide_element05 == true)
    {
        let text05 = span.innerHTML;
        localStorage.setItem("slide_element5", text05);
        console.log(localStorage.getItem("slide_element5"));
        console.log(span.innerHTML);
        text05 = localStorage.getItem("slide_element5");
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
    if(focus_slide_element01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("slide_element1", text01);
        console.log(localStorage.getItem("slide_element1"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("slide_element1");
    }
    else if(focus_slide_element02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("slide_element2", text02);
        console.log(localStorage.getItem("slide_element2"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("slide_element2");
    }
    else if(focus_slide_element03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("slide_element3", text03);
        console.log(localStorage.getItem("slide_element3"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("slide_element3");
    }
    else if(focus_slide_element04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("slide_element4", text04);
        console.log(localStorage.getItem("slide_element4"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("slide_element4");
    }
    else if(focus_slide_element05 == true)
    {
        let text05 = span.innerHTML;
        localStorage.setItem("slide_element5", text05);
        console.log(localStorage.getItem("slide_element5"));
        console.log(span.innerHTML);
        text05 = localStorage.getItem("slide_element5");
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
    if(focus_slide_element01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("slide_element1", text01);
        console.log(localStorage.getItem("slide_element1"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("slide_element1");
    }
    else if(focus_slide_element02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("slide_element2", text02);
        console.log(localStorage.getItem("slide_element2"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("slide_element2");
    }
    else if(focus_slide_element03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("slide_element3", text03);
        console.log(localStorage.getItem("slide_element3"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("slide_element3");
    }
    else if(focus_slide_element04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("slide_element4", text04);
        console.log(localStorage.getItem("slide_element4"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("slide_element4");
    }
    else if(focus_slide_element05 == true)
    {
        let text05 = span.innerHTML;
        localStorage.setItem("slide_element5", text05);
        console.log(localStorage.getItem("slide_element5"));
        console.log(span.innerHTML);
        text05 = localStorage.getItem("slide_element5");
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
    if(focus_slide_element01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("slide_element1", text01);
        console.log(localStorage.getItem("slide_element1"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("slide_element1");
    }
    else if(focus_slide_element02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("slide_element2", text02);
        console.log(localStorage.getItem("slide_element2"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("slide_element2");
    }
    else if(focus_slide_element03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("slide_element3", text03);
        console.log(localStorage.getItem("slide_element3"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("slide_element3");
    }
    else if(focus_slide_element04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("slide_element4", text04);
        console.log(localStorage.getItem("slide_element4"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("slide_element4");
    }
    else if(focus_slide_element05 == true)
    {
        let text05 = span.innerHTML;
        localStorage.setItem("slide_element5", text05);
        console.log(localStorage.getItem("slide_element5"));
        console.log(span.innerHTML);
        text05 = localStorage.getItem("slide_element5");
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
    if(focus_slide_element01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("slide_element1", text01);
        console.log(localStorage.getItem("slide_element1"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("slide_element1");
    }
    else if(focus_slide_element02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("slide_element2", text02);
        console.log(localStorage.getItem("slide_element2"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("slide_element2");
    }
    else if(focus_slide_element03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("slide_element3", text03);
        console.log(localStorage.getItem("slide_element3"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("slide_element3");
    }
    else if(focus_slide_element04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("slide_element4", text04);
        console.log(localStorage.getItem("slide_element4"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("slide_element4");
    }
    else if(focus_slide_element05 == true)
    {
        let text05 = span.innerHTML;
        localStorage.setItem("slide_element5", text05);
        console.log(localStorage.getItem("slide_element5"));
        console.log(span.innerHTML);
        text05 = localStorage.getItem("slide_element5");
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
    if(focus_slide_element01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("slide_element1", text01);
        console.log(localStorage.getItem("slide_element1"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("slide_element1");
    }
    else if(focus_slide_element02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("slide_element2", text02);
        console.log(localStorage.getItem("slide_element2"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("slide_element2");
    }
    else if(focus_slide_element03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("slide_element3", text03);
        console.log(localStorage.getItem("slide_element3"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("slide_element3");
    }
    else if(focus_slide_element04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("slide_element4", text04);
        console.log(localStorage.getItem("slide_element4"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("slide_element4");
    }
    else if(focus_slide_element05 == true)
    {
        let text05 = span.innerHTML;
        localStorage.setItem("slide_element5", text05);
        console.log(localStorage.getItem("slide_element5"));
        console.log(span.innerHTML);
        text05 = localStorage.getItem("slide_element5");
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
    if(focus_slide_element01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("slide_element1", text01);
        console.log(localStorage.getItem("slide_element1"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("slide_element1");
    }
    else if(focus_slide_element02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("slide_element2", text02);
        console.log(localStorage.getItem("slide_element2"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("slide_element2");
    }
    else if(focus_slide_element03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("slide_element3", text03);
        console.log(localStorage.getItem("slide_element3"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("slide_element3");
    }
    else if(focus_slide_element04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("slide_element4", text04);
        console.log(localStorage.getItem("slide_element4"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("slide_element4");
    }
    else if(focus_slide_element05 == true)
    {
        let text05 = span.innerHTML;
        localStorage.setItem("slide_element5", text05);
        console.log(localStorage.getItem("slide_element5"));
        console.log(span.innerHTML);
        text05 = localStorage.getItem("slide_element5");
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
    if(focus_slide_element01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("slide_element1", text01);
        console.log(localStorage.getItem("slide_element1"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("slide_element1");
    }
    else if(focus_slide_element02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("slide_element2", text02);
        console.log(localStorage.getItem("slide_element2"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("slide_element2");
    }
    else if(focus_slide_element03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("slide_element3", text03);
        console.log(localStorage.getItem("slide_element3"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("slide_element3");
    }
    else if(focus_slide_element04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("slide_element4", text04);
        console.log(localStorage.getItem("slide_element4"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("slide_element4");
    }
    else if(focus_slide_element05 == true)
    {
        let text05 = span.innerHTML;
        localStorage.setItem("slide_element5", text05);
        console.log(localStorage.getItem("slide_element5"));
        console.log(span.innerHTML);
        text05 = localStorage.getItem("slide_element5");
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
    if(focus_slide_element01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("slide_element1", text01);
        console.log(localStorage.getItem("slide_element1"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("slide_element1");
    }
    else if(focus_slide_element02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("slide_element2", text02);
        console.log(localStorage.getItem("slide_element2"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("slide_element2");
    }
    else if(focus_slide_element03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("slide_element3", text03);
        console.log(localStorage.getItem("slide_element3"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("slide_element3");
    }
    else if(focus_slide_element04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("slide_element4", text04);
        console.log(localStorage.getItem("slide_element4"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("slide_element4");
    }
    else if(focus_slide_element05 == true)
    {
        let text05 = span.innerHTML;
        localStorage.setItem("slide_element5", text05);
        console.log(localStorage.getItem("slide_element5"));
        console.log(span.innerHTML);
        text05 = localStorage.getItem("slide_element5");
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
    if(focus_slide_element01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("slide_element1", text01);
        console.log(localStorage.getItem("slide_element1"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("slide_element1");
    }
    else if(focus_slide_element02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("slide_element2", text02);
        console.log(localStorage.getItem("slide_element2"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("slide_element2");
    }
    else if(focus_slide_element03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("slide_element3", text03);
        console.log(localStorage.getItem("slide_element3"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("slide_element3");
    }
    else if(focus_slide_element04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("slide_element4", text04);
        console.log(localStorage.getItem("slide_element4"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("slide_element4");
    }
    else if(focus_slide_element05 == true)
    {
        let text05 = span.innerHTML;
        localStorage.setItem("slide_element5", text05);
        console.log(localStorage.getItem("slide_element5"));
        console.log(span.innerHTML);
        text05 = localStorage.getItem("slide_element5");
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
    if(focus_slide_element01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("slide_element1", text01);
        console.log(localStorage.getItem("slide_element1"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("slide_element1");
    }
    else if(focus_slide_element02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("slide_element2", text02);
        console.log(localStorage.getItem("slide_element2"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("slide_element2");
    }
    else if(focus_slide_element03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("slide_element3", text03);
        console.log(localStorage.getItem("slide_element3"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("slide_element3");
    }
    else if(focus_slide_element04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("slide_element4", text04);
        console.log(localStorage.getItem("slide_element4"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("slide_element4");
    }
    else if(focus_slide_element05 == true)
    {
        let text05 = span.innerHTML;
        localStorage.setItem("slide_element5", text05);
        console.log(localStorage.getItem("slide_element5"));
        console.log(span.innerHTML);
        text05 = localStorage.getItem("slide_element5");
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
    if(focus_slide_element01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("slide_element1", text01);
        console.log(localStorage.getItem("slide_element1"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("slide_element1");
    }
    else if(focus_slide_element02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("slide_element2", text02);
        console.log(localStorage.getItem("slide_element2"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("slide_element2");
    }
    else if(focus_slide_element03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("slide_element3", text03);
        console.log(localStorage.getItem("slide_element3"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("slide_element3");
    }
    else if(focus_slide_element04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("slide_element4", text04);
        console.log(localStorage.getItem("slide_element4"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("slide_element4");
    }
    else if(focus_slide_element05 == true)
    {
        let text05 = span.innerHTML;
        localStorage.setItem("slide_element5", text05);
        console.log(localStorage.getItem("slide_element5"));
        console.log(span.innerHTML);
        text05 = localStorage.getItem("slide_element5");
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
    if(focus_slide_element01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("slide_element1", text01);
        console.log(localStorage.getItem("slide_element1"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("slide_element1");
    }
    else if(focus_slide_element02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("slide_element2", text02);
        console.log(localStorage.getItem("slide_element2"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("slide_element2");
    }
    else if(focus_slide_element03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("slide_element3", text03);
        console.log(localStorage.getItem("slide_element3"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("slide_element3");
    }
    else if(focus_slide_element04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("slide_element4", text04);
        console.log(localStorage.getItem("slide_element4"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("slide_element4");
    }
    else if(focus_slide_element05 == true)
    {
        let text05 = span.innerHTML;
        localStorage.setItem("slide_element5", text05);
        console.log(localStorage.getItem("slide_element5"));
        console.log(span.innerHTML);
        text05 = localStorage.getItem("slide_element5");
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
    if(focus_slide_element01 == true)
    {
        let text01 = span.innerHTML;
        localStorage.setItem("slide_element1", text01);
        console.log(localStorage.getItem("slide_element1"));
        console.log(span.innerHTML);
        text01 = localStorage.getItem("slide_element1");
    }
    else if(focus_slide_element02 == true)
    {
        let text02 = span.innerHTML;
        localStorage.setItem("slide_element2", text02);
        console.log(localStorage.getItem("slide_element2"));
        console.log(span.innerHTML);
        text02 = localStorage.getItem("slide_element2");
    }
    else if(focus_slide_element03 == true)
    {
        let text03 = span.innerHTML;
        localStorage.setItem("slide_element3", text03);
        console.log(localStorage.getItem("slide_element3"));
        console.log(span.innerHTML);
        text03 = localStorage.getItem("slide_element3");
    }
    else if(focus_slide_element04 == true)
    {
        let text04 = span.innerHTML;
        localStorage.setItem("slide_element4", text04);
        console.log(localStorage.getItem("slide_element4"));
        console.log(span.innerHTML);
        text04 = localStorage.getItem("slide_element4");
    }
    else if(focus_slide_element05 == true)
    {
        let text05 = span.innerHTML;
        localStorage.setItem("slide_element5", text05);
        console.log(localStorage.getItem("slide_element5"));
        console.log(span.innerHTML);
        text05 = localStorage.getItem("slide_element5");
    }        
}

/*Changes the animation description text if the user moves the cursor to the button*/
$("#play_the_animation").hover(function(){
  $(".animation_description").text("Plays a set of animations.");
  }, function(){
  $(".animation_description").text("");
});

/*Due to focus handling, it will be working only in the future Python version!*/
$("#play_the_animation").on("click", function()
{
    alert("Due to focus handling, specific code needed, which will appear in the Python version!");
});

/*Changes the animation description text if the user moves the cursor to the button*/
$("#animation_fade_in").hover(function(){
  $(".animation_description").text("Changes the opacity of the slide element in a smooth way.");
  }, function(){
  $(".animation_description").text("");
});

/*if the player clicks on the fade in animation button*/
$("#animation_fade_in").on("click", function()
{
    if(focus_slide_element01 == true)
    {
        $("#slide1_title").animate({opacity: 0.75});
        $("#slide1_title").animate({opacity: 0.5});
        $("#slide1_title").animate({opacity: 0.25});
        $("#slide1_title").animate({opacity: 0});
        $("#slide1_title").animate({opacity: 0.25});
        $("#slide1_title").animate({opacity: 0.5});
        $("#slide1_title").animate({opacity: 0.75});
        $("#slide1_title").animate({opacity: 1});
    }
    else if(focus_slide_element02 == true)
    {
        $("#slide1_text").animate({opacity: 0.75});
        $("#slide1_text").animate({opacity: 0.5});
        $("#slide1_text").animate({opacity: 0.25});
        $("#slide1_text").animate({opacity: 0});
        $("#slide1_text").animate({opacity: 0.25});
        $("#slide1_text").animate({opacity: 0.5});
        $("#slide1_text").animate({opacity: 0.75});
        $("#slide1_text").animate({opacity: 1});
    }
    else if(focus_slide_element03 == true)
    {
        $("#slide2_title").animate({opacity: 0.75});
        $("#slide2_title").animate({opacity: 0.5});
        $("#slide2_title").animate({opacity: 0.25});
        $("#slide2_title").animate({opacity: 0});
        $("#slide2_title").animate({opacity: 0.25});
        $("#slide2_title").animate({opacity: 0.5});
        $("#slide2_title").animate({opacity: 0.75});
        $("#slide2_title").animate({opacity: 1});
    }
    else if(focus_slide_element04 == true)
    {
        $("#slide2_text").animate({opacity: 0.75});
        $("#slide2_text").animate({opacity: 0.5});
        $("#slide2_text").animate({opacity: 0.25});
        $("#slide2_text").animate({opacity: 0});
        $("#slide2_text").animate({opacity: 0.25});
        $("#slide2_text").animate({opacity: 0.5});
        $("#slide2_text").animate({opacity: 0.75});
        $("#slide2_text").animate({opacity: 1});
    }
    else if(focus_slide_element05 == true)
    {
        $("#slide3_title").animate({opacity: 0.75});
        $("#slide3_title").animate({opacity: 0.5});
        $("#slide3_title").animate({opacity: 0.25});
        $("#slide3_title").animate({opacity: 0});
        $("#slide3_title").animate({opacity: 0.25});
        $("#slide3_title").animate({opacity: 0.5});
        $("#slide3_title").animate({opacity: 0.75});
        $("#slide3_title").animate({opacity: 1});
    }
    else if(focus_slide_element06 == true)
    {
        $("#slide_image").animate({opacity: 0.75});
        $("#slide_image").animate({opacity: 0.5});
        $("#slide_image").animate({opacity: 0.25});
        $("#slide_image").animate({opacity: 0});
        $("#slide_image").animate({opacity: 0.25});
        $("#slide_image").animate({opacity: 0.5});
        $("#slide_image").animate({opacity: 0.75});
        $("#slide_image").animate({opacity: 1});
    }
});

/*Changes the animation description text if the user moves the cursor to the button*/
$("#animation_swim_in").hover(function(){
  $(".animation_description").text("The slide element swims into its original position from one place.");
  }, function(){
  $(".animation_description").text("");
});

/*if the player clicks on the swim in animation button*/
$("#animation_swim_in").on("click", function()
{
    if(focus_slide_element01 == true)
    {
        $("#slide1_title").animate({left: '90%'});
        $("#slide1_title").animate({left: '75%'});
        $("#slide1_title").animate({left: '60%'});
        $("#slide1_title").animate({left: '45%'});
        $("#slide1_title").animate({left: '30%'});
        $("#slide1_title").animate({left: '15%'});
        $("#slide1_title").animate({left: '0%'});
    }
    else if(focus_slide_element02 == true)
    {
        $("#slide1_text").animate({left: '90%'});
        $("#slide1_text").animate({left: '75%'});
        $("#slide1_text").animate({left: '60%'});
        $("#slide1_text").animate({left: '45%'});
        $("#slide1_text").animate({left: '30%'});
        $("#slide1_text").animate({left: '15%'});
        $("#slide1_text").animate({left: '0%'});
    }
    else if(focus_slide_element03 == true)
    {
        $("#slide2_title").animate({left: '90%'});
        $("#slide2_title").animate({left: '75%'});
        $("#slide2_title").animate({left: '60%'});
        $("#slide2_title").animate({left: '45%'});
        $("#slide2_title").animate({left: '30%'});
        $("#slide2_title").animate({left: '15%'});
        $("#slide2_title").animate({left: '0%'});
    }
    else if(focus_slide_element04 == true)
    {
        $("#slide2_text").animate({left: '90%'});
        $("#slide2_text").animate({left: '75%'});
        $("#slide2_text").animate({left: '60%'});
        $("#slide2_text").animate({left: '45%'});
        $("#slide2_text").animate({left: '30%'});
        $("#slide2_text").animate({left: '15%'});
        $("#slide2_text").animate({left: '0%'});
    }
    else if(focus_slide_element05 == true)
    {
        $("#slide3_title").animate({left: '90%'});
        $("#slide3_title").animate({left: '75%'});
        $("#slide3_title").animate({left: '60%'});
        $("#slide3_title").animate({left: '45%'});
        $("#slide3_title").animate({left: '30%'});
        $("#slide3_title").animate({left: '15%'});
        $("#slide3_title").animate({left: '0%'});
    }
    else if(focus_slide_element06 == true)
    {
        $("#slide_image").animate({left: '90%'});
        $("#slide_image").animate({left: '75%'});
        $("#slide_image").animate({left: '60%'});
        $("#slide_image").animate({left: '45%'});
        $("#slide_image").animate({left: '30%'});
        $("#slide_image").animate({left: '15%'});
        $("#slide_image").animate({left: '0%'});
    }
});

/*Changes the animation description text if the user moves the cursor to the button*/
$("#animation_rotate").hover(function(){
  $(".animation_description").text("Rotates the slide element in the code defined angle.");
  }, function(){
  $(".animation_description").text("");
});

/*if the player clicks on the rotate animation button*/
$("#animation_rotate").on("click", function()
{
    if(focus_slide_element01 == true)
    {
        $("#slide1_title").css("-moz-transform", "rotate(180deg)");
        setTimeout(function(){ $("#slide1_title").css("-moz-transform", "rotate(0deg)");}, 1000);
    }
    else if(focus_slide_element02 == true)
    {
        $("#slide1_text").css("-moz-transform", "rotate(180deg)");
        setTimeout(function(){$("#slide1_text").css("-moz-transform", "rotate(360deg)");}, 1000);
    }
    else if(focus_slide_element03 == true)
    {
        $("#slide2_title").css("-moz-transform", "rotate(180deg)");
        setTimeout(function(){$("#slide2_title").css("-moz-transform", "rotate(360deg)");}, 1000);
    }
    else if(focus_slide_element04 == true)
    {
        $("#slide2_text").css("-moz-transform", "rotate(180deg)");
        setTimeout(function(){$("#slide2_text").css("-moz-transform", "rotate(360deg)");}, 1000);
    }
    else if(focus_slide_element05 == true)
    {
        $("#slide3_title").css("-moz-transform", "rotate(180deg)");
        setTimeout(function(){$("#slide3_title").css("-moz-transform", "rotate(360deg)");}, 1000);
    }
    else if(focus_slide_element06 == true)
    {
        $("#slide_image").css("-moz-transform", "rotate(180deg)");
        setTimeout(function(){$("#slide_image").css("-moz-transform", "rotate(360deg)");}, 1000);
    }
});

/*Changes the animation description text if the user moves the cursor to the button*/
$("#animation_bounce_in").hover(function(){
  $(".animation_description").text("The slide element jumps in and moves like a bouncing ball.");
  }, function(){
  $(".animation_description").text("");
});

/*if the player clicks on the bounce in in animation button*/
$("#animation_bounce_in").on("click", function()
{
    if(focus_slide_element01 == true)
    {
        $("#slide1_title").animate({top: '20px'});
        $("#slide1_title").animate({top: '10px'});
        $("#slide1_title").animate({top: '0px'});
        $("#slide1_title").animate({top: '10px'});
        $("#slide1_title").animate({top: '0px'});
    }
    else if(focus_slide_element02 == true)
    {
        $("#slide1_text").animate({top: '20px'});
        $("#slide1_text").animate({top: '10px'});
        $("#slide1_text").animate({top: '0px'});
        $("#slide1_text").animate({top: '10px'});
        $("#slide1_text").animate({top: '0px'});
    }
    else if(focus_slide_element03 == true)
    {
        $("#slide2_title").animate({top: '20px'});
        $("#slide2_title").animate({top: '10px'});
        $("#slide2_title").animate({top: '0px'});
        $("#slide2_title").animate({top: '10px'});
        $("#slide2_title").animate({top: '0px'});
    }
    else if(focus_slide_element04 == true)
    {
        $("#slide2_text").animate({top: '20px'});
        $("#slide2_text").animate({top: '10px'});
        $("#slide2_text").animate({top: '0px'});
        $("#slide2_text").animate({top: '10px'});
        $("#slide2_text").animate({top: '0px'});
    }
    else if(focus_slide_element05 == true)
    {
        $("#slide3_title").animate({top: '20px'});
        $("#slide3_title").animate({top: '10px'});
        $("#slide3_title").animate({top: '0px'});
        $("#slide3_title").animate({top: '10px'});
        $("#slide3_title").animate({top: '0px'});
    }
    else if(focus_slide_element06 == true)
    {
        $("#slide_image").animate({top: '20px'});
        $("#slide_image").animate({top: '10px'});
        $("#slide_image").animate({top: '0px'});
        $("#slide_image").animate({top: '10px'});
        $("#slide_image").animate({top: '0px'});
    }
});

/*Changes the animation description text if the user moves the cursor to the button*/
$("#animation_blinds_in").hover(function(){
  $(".animation_description").text("The slide element disappears and then reappears, like a blind.");
  }, function(){
  $(".animation_description").text("");
});

/*if the player clicks on the blinds in animation button*/
$("#animation_blinds_in").on("click", function()
{
    if(focus_slide_element01 == true)
    {
        $("#slide1_title").css("color", "#202020");
        setTimeout(function(){$("#slide1_title").css("color", "white");}, 2000);
    }
    else if(focus_slide_element02 == true)
    {
        $("#slide1_text").css("color", "#202020");
        setTimeout(function(){$("#slide1_text").css("color", "white");}, 2000);
    }
    else if(focus_slide_element03 == true)
    {
        $("#slide2_title").css("color", "#202020");
        setTimeout(function(){$("#slide2_title").css("color", "white");}, 2000);
    }
    else if(focus_slide_element04 == true)
    {
        $("#slide2_text").css("color", "#202020");
        setTimeout(function(){$("#slide2_text").css("color", "white");}, 2000);
    }
    else if(focus_slide_element05 == true)
    {
        $("#slide3_title").css("color", "#202020");
        setTimeout(function(){$("#slide3_title").css("color", "white");}, 2000);
    }
    else if(focus_slide_element06 == true)
    {
        $("#slide_image").css("display", "none");
        setTimeout(function(){$("#slide_image").css("display", "block");}, 2000);
    }
});

/*Changes the animation description text if the user moves the cursor to the button*/
$("#animation_drops_in").hover(function(){
  $(".animation_description").text("The slide element drops into the area of its original position and bounces slightly.");
  }, function(){
  $(".animation_description").text("");
});

/*if the player clicks on the drops in animation button*/
$("#animation_drops_in").on("click", function()
{
    if(focus_slide_element01 == true)
    {
        $("#slide1_title").animate({position: 'relative'});
        $("#slide1_title").animate({top: '-100px'});
        $("#slide1_title").animate({top: '-75px'});
        $("#slide1_title").animate({top: '-50px'});
        $("#slide1_title").animate({top: '-25px'});
        $("#slide1_title").animate({top: '0px'});
        $("#slide1_title").animate({top: '20px'});
        $("#slide1_title").animate({top: '10px'});
        $("#slide1_title").animate({top: '0px'});
        $("#slide1_title").animate({top: '10px'});
        $("#slide1_title").animate({top: '0px'});
    }
    else if(focus_slide_element02 == true)
    {
        $("#slide1_text").animate({position: 'relative'});
        $("#slide1_text").animate({top: '-100px'});
        $("#slide1_text").animate({top: '-75px'});
        $("#slide1_text").animate({top: '-50px'});
        $("#slide1_text").animate({top: '-25px'});
        $("#slide1_text").animate({top: '0px'});
        $("#slide1_text").animate({top: '20px'});
        $("#slide1_text").animate({top: '10px'});
        $("#slide1_text").animate({top: '0px'});
        $("#slide1_text").animate({top: '10px'});
        $("#slide1_text").animate({top: '0px'});
    }
    else if(focus_slide_element03 == true)
    {
        $("#slide2_title").animate({position: 'relative'});
        $("#slide2_title").animate({top: '-100px'});
        $("#slide2_title").animate({top: '-75px'});
        $("#slide2_title").animate({top: '-50px'});
        $("#slide2_title").animate({top: '-25px'});
        $("#slide2_title").animate({top: '0px'});
        $("#slide2_title").animate({top: '20px'});
        $("#slide2_title").animate({top: '10px'});
        $("#slide2_title").animate({top: '0px'});
        $("#slide2_title").animate({top: '10px'});
        $("#slide2_title").animate({top: '0px'});
    }
    else if(focus_slide_element04 == true)
    {
        $("#slide2_text").animate({position: 'relative'});
        $("#slide2_text").animate({top: '-100px'});
        $("#slide2_text").animate({top: '-75px'});
        $("#slide2_text").animate({top: '-50px'});
        $("#slide2_text").animate({top: '-25px'});
        $("#slide2_text").animate({top: '0px'});
        $("#slide2_text").animate({top: '20px'});
        $("#slide2_text").animate({top: '10px'});
        $("#slide2_text").animate({top: '0px'});
        $("#slide2_text").animate({top: '10px'});
        $("#slide2_text").animate({top: '0px'});
    }
    else if(focus_slide_element05 == true)
    {
        $("#slide3_title").animate({position: 'relative'});
        $("#slide3_title").animate({top: '-100px'});
        $("#slide3_title").animate({top: '-75px'});
        $("#slide3_title").animate({top: '-50px'});
        $("#slide3_title").animate({top: '-25px'});
        $("#slide3_title").animate({top: '0px'});
        $("#slide3_title").animate({top: '20px'});
        $("#slide3_title").animate({top: '10px'});
        $("#slide3_title").animate({top: '0px'});
        $("#slide3_title").animate({top: '10px'});
        $("#slide3_title").animate({top: '0px'});
    }
    else if(focus_slide_element06 == true)
    {
        $("#slide_image").animate({position: 'relative'});
        $("#slide_image").animate({top: '-100px'});
        $("#slide_image").animate({top: '-75px'});
        $("#slide_image").animate({top: '-50px'});
        $("#slide_image").animate({top: '-25px'});
        $("#slide_image").animate({top: '0px'});
        $("#slide_image").animate({top: '20px'});
        $("#slide_image").animate({top: '10px'});
        $("#slide_image").animate({top: '0px'});
        $("#slide_image").animate({top: '10px'});
        $("#slide_image").animate({top: '0px'});
    }
});