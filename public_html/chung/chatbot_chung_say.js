// chatbot_chung say() functions overrides 
var intext0 = "";
var vars = [];
var icookie = 0;

function say() {
    //alert("/"+formateval("okeval(elizawords.length) eval(v['y'];v['y']+=1)")+"/");
    //icookie+=1;if(icookie>11){icookie=0;savecookie();}
    //reset();
    var intext = document.getElementById('intext').value;
    if (intext == "") {
        intext = intext0;
    } //+" .";};
    intext = replaceall(intext, "&", " ");
    if (intext == "") {
        intext = " ";
    }
    intext0 = intext;
    nextsub = 'say1("' + intext + '");';
    if (intext != "*" && intext.substr(0, 5).toLowerCase() != "wiki ") {
        detectlang(intext + "+" + intext);
    } else {
        say2(intext);
    }
}

function say1(intext) { //alert(lang+"/"+intext);
    //if((langs.indexOf(lang+"-en")<0) || (langs.indexOf("en-"+lang)<0)){lang="en";}
    nextsub = "setTimeout('say2(translatext);',150);";
    translate(intext, lang, "en");
}

function say2(intext) {
    if (intext == "*") {
        intext = oldmsg;
    }
    intext = formatinput(intext);
    //alert("intext:"+intext);
    intext22 = intext;
    saytest22();
}

function say22() {
    intext = intext22;
    text = "";
    if (mywikitext == "" || mywikitext == "searching...") {
        text = processinput(intext); //eliza.transform(intext);
        if (testsay222 == 1) {
            saytest222();
            testsay222 = 0;
            return;
        }
    } else {
        text = mywikitext;
        mywikitext = "";
    }
    //25sal!!
    //say222();
}

function say222() {
    nextsub = "say3(translatext);";
    if (lang != "en") {
        text = encodeURI(text);
    }
    translate(text, "en", lang);

    
    //In questa funzione dovrei chiamare il metodo sendMyMsg() per inviare alla base di conoscenza quello 
    //che voglio

   
    //alert(text);
    //text=formateval(text);
    //text=text.toLowerCase();
    //alert(text);
}

function say3(text) {
    var msg = text; //intext+crlf+text+crlf+crlf;
    if (lang != "en" && msg.indexOf(">") > 1) {
        msg = replaceall(msg, "> >", ">");
        msg = replaceall(msg, "> ", ">§");
        msg = replaceall(msg, ">§", crlf + "> ");
    }
    printmsg(">>" + intext0.substr(0, 40) + crlf + msg);
    var outmsg = msg.substr(msg.indexOf(">") + 2, 999);
    var patt = msg.substr(0, msg.indexOf(">"));
    if (outmsg.length < 0.65 * patt.length) {
        outmsg = patt + " " + outmsg;
    }
    if (auxvar != "") {
        msg += crlf + "auxvar=" + auxvar;
    };
    if (auxvar != "") {
        printmsg(msg);
    }
    //alert(outmsg);
    if (intext0.trim() == "exit") {
        setTimeout("subquit();", 7000);
    }
    words = formatoutput(outmsg).split("");
    var words0 = "";
    textspeak = "";
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            if (abc.indexOf(words[i]) >= 0 - 999) {
                textspeak = textspeak + words[i];
            };
            if (words0 != " " && words[i] == " ") {
                textspeak = textspeak + " ";
            };
            words0 = words[i];;
        };
    };
    textspeakall = textspeak;
    audiotime1 = Math.min(audiotime1, 0.2 + gettimer() / 1000.0);
    //speak();
}
