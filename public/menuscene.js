class MenuScene extends Phaser.Scene{
	
	constructor(){
		super('MenuScene')
		self.previousTime = null;
	}

	preload(){

	}

	create(){
		this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#697e96");
		
		var name = '';
		
		if(localStorage.getItem('name') === null ) {
			name = names[Math.floor(Math.random() * names.length)];
			localStorage.setItem('name', name );
	    }
	    else {
			name = localStorage.getItem('name');
		}

		var helloText = 'Hello ' + name + ''; 
		
		this.add.text(game.config.width/2 - (game.config.width / 20  + 100), game.config.height/2 - 50, helloText, { fontSize: game.config.width / 20});
	 	
	 	const playButton = this.add.text(game.config.width/2 - (game.config.width / 20  + 100), game.config.height/2, 'CLICK HERE TO PLAY', { fontSize: game.config.width / 20});
	    playButton.setInteractive();
	    
	    var self = this;
	    playButton.on('pointerdown', () => { 
	    	console.log(new Date().getTime() - self.previousTime > 10000);
	    	if(self.previousTime == null || new Date().getTime() - self.previousTime > 10000) {
		
		    	this.scene.start('PlayGame');
		    	self.previousTime = new Date().getTime();
	        }

	    });

	 	const howToPlay = this.add.text(game.config.width/2 - (game.config.width / 20  + 100), game.config.height/2 + 50, 'HOW TO PLAY?', { fontSize: game.config.width / 20});
	    howToPlay.setInteractive();
	    
	    var self = this;
	    howToPlay.on('pointerdown', () => { 
		    	this.scene.start('OnboardingScene');
	    });
	}

}


var names = [
"Aaren"
,
"Aarika"
,
"Abagael"
,
"Abagail"
,
"Abbe"
,
"Abbey"
,
"Abbi"
,
"Abbie"
,
"Abby"
,
"Abbye"
,
"Abigael"
,
"Abigail"
,
"Abigale"
,
"Abra"
,
"Ada"
,
"Adah"
,
"Adaline"
,
"Adan"
,
"Adara"
,
"Adda"
,
"Addi"
,
"Addia"
,
"Addie"
,
"Addy"
,
"Adel"
,
"Adela"
,
"Adelaida"
,
"Adelaide"
,
"Adele"
,
"Adelheid"
,
"Adelice"
,
"Adelina"
,
"Adelind"
,
"Adeline"
,
"Adella"
,
"Adelle"
,
"Adena"
,
"Adey"
,
"Adi"
,
"Adiana"
,
"Adina"
,
"Adora"
,
"Adore"
,
"Adoree"
,
"Adorne"
,
"Adrea"
,
"Adria"
,
"Adriaens"
,
"Adrian"
,
"Adriana"
,
"Adriane"
,
"Adrianna"
,
"Adrianne"
,
"Adriena"
,
"Adrienne"
,
"Aeriel"
,
"Aeriela"
,
"Aeriell"
,
"Afton"
,
"Ag"
,
"Agace"
,
"Agata"
,
"Agatha"
,
"Agathe"
,
"Aggi"
,
"Aggie"
,
"Aggy"
,
"Agna"
,
"Agnella"
,
"Agnes"
,
"Agnese"
,
"Agnesse"
,
"Agneta"
,
"Agnola"
,
"Agretha"
,
"Aida"
,
"Aidan"
,
"Aigneis"
,
"Aila"
,
"Aile"
,
"Ailee"
,
"Aileen"
,
"Ailene"
,
"Ailey"
,
"Aili"
,
"Ailina"
,
"Ailis"
,
"Ailsun"
,
"Ailyn"
,
"Aime"
,
"Aimee"
,
"Aimil"
,
"Aindrea"
,
"Ainslee"
,
"Ainsley"
,
"Ainslie"
,
"Ajay"
,
"Alaine"
,
"Alameda"
,
"Alana"
,
"Alanah"
,
"Alane"
,
"Alanna"
,
"Alayne"
,
"Alberta"
,
"Albertina"
,
"Albertine"
,
"Albina"
,
"Alecia"
,
"Aleda"
,
"Aleece"
,
"Aleen"
,
"Alejandra"
,
"Alejandrina"
,
"Alena"
,
"Alene"
,
"Alessandra"
,
"Aleta"
,
"Alethea"
,
"Alex"
,
"Alexa"
,
"Alexandra"
,
"Alexandrina"
,
"Alexi"
,
"Alexia"
,
"Alexina"
,
"Alexine"
,
"Alexis"
,
"Alfi"
,
"Alfie"
,
"Alfreda"
,
"Alfy"
,
"Ali"
,
"Alia"
,
"Alica"
,
"Alice"
,
"Alicea"
,
"Alicia"
,
"Alida"
,
"Alidia"
,
"Alie"
,
"Alika"
,
"Alikee"
,
"Alina"
,
"Aline"
,
"Alis"
,
"Alisa"
,
"Alisha"
,
"Alison"
,
"Alissa"
,
"Alisun"
,
"Alix"
,
"Aliza"
,
"Alla"
,
"Alleen"
,
"Allegra"
,
"Allene"
,
"Alli"
,
"Allianora"
,
"Allie"
,
"Allina"
,
"Allis"
,
"Allison"
,
"Allissa"
,
"Allix"
,
"Allsun"
,
"Allx"
,
"Ally"
,
"Allyce"
,
"Allyn"
,
"Allys"
,
"Allyson"
,
"Alma"
,
"Almeda"
,
"Almeria"
,
"Almeta"
,
"Almira"
,
"Almire"
,
"Aloise"
,
"Aloisia"
,
"Aloysia"
,
"Alta"
,
"Althea"
,
"Alvera"
,
"Alverta"
,
"Alvina"
,
"Alvinia"
,
"Alvira"
,
"Alyce"
,
"Alyda"
,
"Alys"
,
"Alysa"
,
"Alyse"
,
"Alysia"
,
"Alyson"
,
"Alyss"
,
"Alyssa"
,
"Amabel"
,
"Amabelle"
,
"Amalea"
,
"Amalee"
,
"Amaleta"
,
"Amalia"
,
"Amalie"
,
"Amalita"
,
"Amalle"
,
"Amanda"
,
"Amandi"
,
"Amandie"
,
"Amandy"
,
"Amara"
,
"Amargo"
,
"Amata"
,
"Amber"
,
"Amberly"
,
"Ambur"
,
"Ame"
,
"Amelia"
,
"Amelie"
,
"Amelina"
,
"Ameline"
,
"Amelita"
,
"Ami"
,
"Amie"
,
"Amii"
,
"Amil"
,
"Amitie"
,
"Amity"
,
"Ammamaria"
,
"Amy"
,
"Amye"
,
"Ana"
,
"Anabal"
,
"Anabel"
,
"Anabella"
,
"Anabelle"
,
"Analiese"
,
"Analise"
,
"Anallese"
,
"Anallise"
,
"Anastasia"
,
"Anastasie"
,
"Anastassia"
,
"Anatola"
,
"Andee"
,
"Andeee"
,
"Anderea"
,
"Andi"
,
"Andie"
,
"Andra"
,
"Andrea"
,
"Andreana"
,
"Andree"
,
"Andrei"
,
"Andria"
,
"Andriana"
,
"Andriette"
,
"Andromache"
,
"Andy"
,
"Anestassia"
,
"Anet"
,
"Anett"
,
"Anetta"
,
"Anette"
,
"Ange"
,
"Angel"
,
"Angela"
,
"Angele"
,
"Angelia"
,
"Angelica"
,
"Angelika"
,
"Angelina"
,
"Angeline"
,
"Angelique"
,
"Angelita"
,
"Angelle"
,
"Angie"
,
"Angil"
,
"Angy"
,
"Ania"
,
"Anica"
,
"Anissa"
,
"Anita"
,
"Anitra"
,
"Anjanette"
,
"Anjela"
,
"Ann"
,
"Ann-Marie"
,
"Anna"
,
"Anna-Diana"
,
"Anna-Diane"
,
"Anna-Maria"
,
"Annabal"
,
"Annabel"
,
"Annabela"
,
"Annabell"
,
"Annabella"
,
"Annabelle"
,
"Annadiana"
,
"Annadiane"
,
"Annalee"
,
"Annaliese"
,
"Annalise"
,
"Annamaria"
,
"Annamarie"
,
"Anne"
,
"Anne-Corinne"
,
"Anne-Marie"
,
"Annecorinne"
,
"Anneliese"
,
"Annelise"
,
"Annemarie"
,
"Annetta"
,
"Annette"
,
"Anni"
,
"Annice"
,
"Annie"
,
"Annis"
,
"Annissa"
,
"Annmaria"
,
"Annmarie"
,
"Annnora"
,
"Annora"
,
"Anny"
,
"Anselma"
,
"Ansley"
,
"Anstice"
,
"Anthe"
,
"Anthea"
,
"Anthia"
,
"Anthiathia"
,
"Antoinette"
,
"Antonella"
,
"Antonetta"
,
"Antonia"
,
"Antonie"
,
"Antonietta"
,
"Antonina"
,
"Anya"
,
"Appolonia"
,
"April"
,
"Aprilette"
,
"Ara"
,
"Arabel"
,
"Arabela"
,
"Arabele"
,
"Arabella"
,
"Arabelle"
,
"Arda"
,
"Ardath"
,
"Ardeen"
,
"Ardelia"
,
"Ardelis"
,
"Ardella"
,
"Ardelle"
,
"Arden"
,
"Ardene"
,
"Ardenia"
,
"Ardine"
,
"Ardis"
,
"Ardisj"
,
"Ardith"
,
"Ardra"
,
"Ardyce"
,
"Ardys"
,
"Ardyth"
,
"Aretha"
,
"Ariadne"
,
"Ariana"
,
"Aridatha"
,
"Ariel"
,
"Ariela"
,
"Ariella"
,
"Arielle"
,
"Arlana"
,
"Arlee"
,
"Arleen"
,
"Arlen"
,
"Arlena"
,
"Arlene"
,
"Arleta"
,
"Arlette"
,
"Arleyne"
,
"Arlie"
,
"Arliene"
,
"Arlina"
,
"Arlinda"
,
"Arline"
,
"Arluene"
,
"Arly"
,
"Arlyn"
,
"Arlyne"
,
"Aryn"
,
"Ashely"
,
"Ashia"
,
"Ashien"
,
"Ashil"
,
"Ashla"
,
"Ashlan"
,
"Ashlee"
,
"Ashleigh"
,
"Ashlen"
,
"Ashley"
,
"Ashli"
,
"Ashlie"
,
"Ashly"
,
"Asia"
,
"Astra"
,
"Astrid"
,
"Astrix"
,
"Atalanta"
,
"Athena"
,
"Athene"
,
"Atlanta"
,
"Atlante"
,
"Auberta"
,
"Aubine"
]