PennController.ResetPrefix(null)
var showProgressBar = false;
PennController.DebugOff()
PennController.AddHost("https://filedn.com/lDf2Oa0trFMzhcSFiv5VDuu/stimuli/")

PennController.Sequence("counter","welcome", "instructions_1","instructions_2", "uebung","instructions_3",randomizeNoMoreThan(anyOf("critical", "filler"),3), "final", "send", "confirmation")


PennController("welcome",                   //Welcome Screen. Logs Age/Gender/Education/Language
    defaultText.print()
    ,
    newText("<p>Wilkommen!</p>")
    ,
    newText("<p>Wir ben&ouml;tigen zun&auml;chst ein paar Informationen.</p>")
    ,
    newText("<p>1. Was ist Ihr Geschlecht?</p>")
    ,
    newScale("gender","M&auml;nnlich","Weiblich","Divers")
        .settings.radio()
        .settings.labelsPosition("top")
        .print()
        .wait(getScale("gender").test.selected())
    ,
    newText("<p>2. Wie alt sind Sie? (Best&auml;tigen Sie die Eingabe mit der Enter-Taste)</p>")
    ,
    newTextInput("age")
        .print()
        .wait(getTextInput("age")
        .testNot.text("") )
    ,
    newText("<p>3. Was ist ihr h&ouml;chster Abschluss?")
    ,
    newScale("education", "Kein Schulabschluss", "Schulabschluss", "Etwas Hochschule/kein Abschluss", "Bachelor", "Master/Doktor/etc.")
        .settings.vertical()
        .settings.labelsPosition("bottom")
        .print()
        .wait(getScale("education").test.selected())
    ,
    newText("<p>4. Was ist Ihre Muttersprache? (Best&auml;tigen Sie die Eingabe mit der Enter-Taste)</p>")
    ,
    newTextInput("language")
         .print()
        .wait(getTextInput("language")
        .testNot.text(""))
    ,
    newText("<p>5. Sind Sie Links- oder Rechtsh&auml;ndig?")
    ,
    newScale("hands", "Linksh&auml;ndig", "Rechtsh&auml;ndig", "Beidh&auml;ndig")
        .settings.vertical()
        .settings.labelsPosition("bottom")
        .print()
        .wait(getScale("hands").test.selected())
    ,
    newButton("Start")
        .print()
        .wait()
    ,
    newVar("gender")
        .settings.global()
        .set(getScale("gender"))
    ,
    newVar("age")
        .settings.global()
        .set(getTextInput("age"))
    ,
    newVar("education")
        .settings.global()
        .set(getScale("education"))
    ,
    newVar("language")
        .settings.global()
        .set(getTextInput("language"))
    ,
    newVar("hands")
        .settings.global()
        .set(getScale("hands"))
    
    
        
    
)
    .log( "item"   ,"na")
       .log( "condition"   ,"na")
       .log( "trial"   ,"na")
      .log( "group"   ,"na")
       .log( "topic"   ,"na")
        .log( "targetWord"   ,"na")
       .log( "correct"   ,"na")
    .log("gender",getVar("gender"))         //.log writes it into the results file
    .log("age",getVar("age"))
    .log("education",getVar("education"))
   .log("language",getVar("language"))
   .log("hands", getVar("hands"))
   .log( "ID" , PennController.GetURLParameter( "user_id" ))
   .log("Comments_end","na")
.setOption("hideProgressBar",true)



PennController("instructions_1",
    defaultText.print()
    ,
    newText("<p>Herzlich willkommen zum Experiment!</p><p> Im folgenden Versuch h&ouml;ren Sie kurze Texte.</p><p>Bitte h&ouml;ren Sie sich die Texte mit grosser Aufmerksamkeit an und achten Sie auf den exakten Wortlaut.</p><p>Ihre Aufgabe ist es, danach zu entscheiden ob ein bestimmtes Wort in dem zuvor geh&ouml;rten Text vorkam oder nicht.</p>")
    ,
    newText("<p>Nach jeder H&ouml;rdatei erscheint auf dem Bildschirm ein Wort, auf das Sie mit Tastendruck reagieren m&uuml;ssen.Bitte reagieren Sie immer so schnell und so akkurat wie m&ouml;glich.</p>")
    ,
    newText("<p> Mit der <b>J-Taste</b> best&auml;tigen Sie, dass Sie das Wort zuvor geh&ouml;rt haben und mit der <b>F-Taste</b> zeigen Sie an, dass genau dieses Wort nicht vorkam. </p>")
    ,
    newText("<p>F = Nein    J = JA </p>")
    ,
    newText("<p>Bitte tragen Sie Kopfh&ouml;rer und stellen Sie sicher, dass Sie sich in einer ruhigen Umgebung befinden</p>")
    ,
    newButton("Weiter")
        .print()
        .wait()
)
    .log( "item"   ,"na")
       .log( "condition"   ,"na")
       .log( "trial"   ,"na")
      .log( "group"   ,"na")
       .log( "topic"   ,"na")
        .log( "targetWord"   ,"na")
       .log( "correct"   ,"na")
    .log("gender",getVar("gender"))         //.log writes it into the results file
    .log("age",getVar("age"))
    .log("education",getVar("education"))
   .log("language",getVar("language"))
   .log("hands", getVar("hands"))
   .log( "ID" , PennController.GetURLParameter( "user_id" ))
   .log("Comments_end","na")
.setOption("hideProgressBar",true)

PennController("instructions_2",
    defaultText.print()
    ,
    newText("<p>Bevor das eigentliche Experiment beginnt, gibt es eine kurze &Uuml;bung. Sie k&ouml;nnen w&auml;hrend der &Uuml;bung die Lautst&auml;rke individuell einstellen.</p>")
    ,
    newText("<p>Bitte merken Sie sich auch die Tastenbelegung!</p>")
    ,
    newText("<p>Zur Erinnerung: F = NEIN und J = JA")
    ,
    newButton("Start")
        .print()
        .wait()

)
    .log( "item"   ,"na")
       .log( "condition"   ,"na")
       .log( "trial"   ,"na")
      .log( "group"   ,"na")
       .log( "topic"   ,"na")
        .log( "targetWord"   ,"na")
       .log( "correct"   ,"na")
    .log("gender",getVar("gender"))         //.log writes it into the results file
    .log("age",getVar("age"))
    .log("education",getVar("education"))
   .log("language",getVar("language"))
   .log("hands", getVar("hands"))
   .log( "ID" , PennController.GetURLParameter( "user_id" ))
   .log("Comments_end","na")
.setOption("hideProgressBar",true)

PennController.Template("array_ueb.csv",
    row => PennController("uebung",
        newAudio("audio", row.filename).play(),
        // newAudio("audio",row.url).play(),
            getAudio("audio")
                .wait("first")
            ,
            newTimer(50)
                .start()
                .wait()
            ,
          newText("null", " ")
      ,
            newCanvas("selection",200,200)
                .settings.add("center at 50%",0,newText("trial",row.targetword).settings.css("font-size","150%"))
                .settings.add( 0 , 100 , newText("NEIN") )
                .settings.add( "right at 100%", 100 , newText("JA") )
                .settings.add(0,150,newText("(F)"))
                .settings.add("right at 100%",150,newText("(J)"))
                .settings.center()
                .print()
            ,
                newTimer("reminder", 4000)
                .settings.callback(getCanvas("selection").remove())
                .settings.callback(getText("null").print().settings.text("<small>Seien Sie bitte schneller! Druecken Sie die J-Taste, um fortzufahren.</small>").settings.css("font-weight","bold").settings.css("font-size", "200%"))
                .start()
    ,
            newKey("select","FJ")
                .wait()
                .settings.callback(getTimer("reminder").stop())
    .settings.log()
           )
    
    .setOption("hideProgressBar",true)
          .log( "item"   ,row.itemnumber)
       .log( "condition"   ,row.condition)
       .log( "trial"   ,row.trial)
      .log( "group"   ,row.group)
       .log( "topic"   ,row.topic)
        .log( "targetWord"   ,row.targetword)
       .log( "correct"   ,"na")
    .log("gender",getVar("gender"))         //.log writes it into the results file
    .log("age",getVar("age"))
    .log("education",getVar("education"))
   .log("language",getVar("language"))
   .log("hands", getVar("hands"))
   .log( "ID" , PennController.GetURLParameter( "user_id" ))
    .log("Comments_end",getVar("comments_end"))

)

PennController("instructions_3",
    newText("<p>Ist ihre Lautst&auml;rke richtig eingestellt?</p>")
        .print()
    ,
    newText("<p>Befinden Sie sich in einer ruhigen Umgebung?</p>")
        .print()
    ,
    newText("<p>Dann kann es jetzt losgehen! Viel Spa&szlig;!</p>")
        .print()
    ,
    newButton("Start")
        .print()
        .wait()
)
        .log( "item"   ,"na")
       .log( "condition"   ,"na")
       .log( "trial"   ,"na")
      .log( "group"   ,"na")
       .log( "topic"   ,"na")
        .log( "targetWord"   ,"na")
       .log( "correct"   ,"na")
    .log("gender",getVar("gender"))         //.log writes it into the results file
    .log("age",getVar("age"))
    .log("education",getVar("education"))
   .log("language",getVar("language"))
   .log("hands", getVar("hands"))
   .log( "ID" , PennController.GetURLParameter( "user_id" ))
   .log("Comments_end","na")
.setOption("hideProgressBar",true)

PennController.Template("full_array.csv",
    row => PennController(row.trial,
            newAudio("audio", row.filename).play()
            ,
            getAudio("audio")
                .wait("first")
            ,
            newTimer(50)
                .start()
                .wait()
            ,
              newText("null1", " ")
      ,
            newCanvas("selection1",200,200)
                .settings.add("center at 50%",0,newText("trial",row.targetword).settings.css("font-size","150%"))
                .settings.add(0 , 100 , newText("NEIN") )
                .settings.add("right at 100%", 100 , newText("JA"))
                .settings.add(0,150,newText("(F)"))
                .settings.add("right at 100%",150,newText("(J)"))
                .settings.center()
                .settings.log()
                .print()

            ,
                    newTimer("reminder1", 4000)
                .settings.callback(getCanvas("selection1").remove())
                .settings.callback(getText("null1").print().settings.text("<small>Seien Sie bitte schneller! Druecken Sie die J-Taste, um fortzufahren.</small>").settings.css("font-weight","bold").settings.css("font-size", "200%"))
                .start()
    ,
            newKey("answer","FJ")
                .wait()
                    .settings.callback(getTimer("reminder1").stop())
                .settings.log()
            

)
      .log( "item"   ,row.itemnumber)
       .log( "condition"   ,row.condition)
       .log( "trial"   ,row.trial)
      .log( "group"   ,row.group)
       .log( "topic"   ,row.topic)
        .log( "targetWord"   ,row.targetword)
           .log( "correct"   ,row.correct)
    .log("gender",getVar("gender"))         
    .log("age",getVar("age"))
    .log("education",getVar("education"))
   .log("language",getVar("language"))
   .log("hands", getVar("hands"))
   .log( "ID" , PennController.GetURLParameter( "user_id" ))
   .log("Comments_end",getVar("comments_end"))

    )



PennController("final",
    newText("<p>Vielen Dank f&uuml;r die Teilnahme an unserem Experiment</p>")
        .print()
    ,
    newText("<p>Gerne nehmen wir Anmerkungen und Kommentare entgegen:</p>")
        .print()
    ,
    newTextInput("comments_end")
        .settings.log()
        .print()
   ,
        
    newText("<p>Tragen Sie bitte ihre Prolific ID hier ein und Best&auml;tigen Sie die Eingabe mit der Enter-Taste.</p>")
        .print()
    ,
    newTextInput("ID")
        .print()
        .wait(getTextInput("ID")
        .testNot.text("") )
    ,
    newVar("comments_end")
        .settings.global()
        .set(getTextInput("comments_end"))
    ,
       newVar("ID")
        .settings.global()
        .set(getTextInput("ID"))
    ,

    newButton("Send Results")
        .print()
        .wait()
)  
    .log( "item"   ,"na")
       .log( "condition"   ,"na")
       .log( "trial"   ,"na")
      .log( "group"   ,"na")
       .log( "topic"   ,"na")
        .log( "targetWord"   ,"na")
       .log( "correct"   ,"na")
    .log("gender",getVar("gender"))         //.log writes it into the results file
    .log("age",getVar("age"))
    .log("education",getVar("education"))
   .log("language",getVar("language"))
   .log("hands", getVar("hands"))
   .log( "ID" , getVar( "ID" ))
   .log("Comments_end",getVar("comments_end"))
.setOption("hideProgressBar",true)    
    
PennController.SendResults("send")

PennController("confirmation",
    newText("<p><a href='https://app.prolific.co/submissions/complete?cc=1A4608B7'>Klicken Sie hier, um Ihre Teilnahme zu bestaetigen.</a></p>")
        .print()
    ,
    newButton("Fertig")
        .wait()
    )
