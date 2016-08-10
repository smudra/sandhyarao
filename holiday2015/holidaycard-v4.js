(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 504,
	height: 360,
	fps: 24,
	color: "#000000",
	manifest: [
		{src:"sounds/holiday2wav.mp3", id:"holiday2wav"}
	]
};



// symbols:



(lib.longdiagonal = function() {
	this.spriteSheet = ss["holidaycard_v4_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.optimations = function() {
	this.spriteSheet = ss["holidaycard_v4_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ornament = function() {
	this.spriteSheet = ss["holidaycard_v4_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.shortdiagonal = function() {
	this.spriteSheet = ss["holidaycard_v4_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.startop = function() {
	this.spriteSheet = ss["holidaycard_v4_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.texthappyholidays = function() {
	this.spriteSheet = ss["holidaycard_v4_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Tween10 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.startop();
	this.instance.setTransform(-49.5,-49.5,0.486,0.486);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.5,-49.5,99.1,99.1);


(lib.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.startop();
	this.instance.setTransform(-49.5,-49.5,0.486,0.486);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.5,-49.5,99.1,99.1);


(lib.textholidays = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.texthappyholidays();
	this.instance.setTransform(-86.3,-61.2,0.492,0.492);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-86.3,-61.2,172.7,122.5);


(lib.stars4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFCC").s().p("AgIAJIgdgBIAXgPIgIgcIAWAQIAXgQIgIAcIAXAPIgdABIgJAbg");
	this.shape.setTransform(-118.7,97.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFCC").s().p("AgGAGIgXAAIASgLIgGgXIARAOIASgOIgGAWIASAMIgXAAIgHAXg");
	this.shape_1.setTransform(-82.5,164.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFCC").s().p("AgGAIIgYABIASgNIgJgWIAVAMIAQgPIgFAXIAUALIgXACIgHAXg");
	this.shape_2.setTransform(16.8,80.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFCC").s().p("AAAAOIgQALIAGgUIgQgMIAVABIAGgTIAFATIAVACIgRAKIAFAUg");
	this.shape_3.setTransform(144,-42.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFCC").s().p("AgGAHIgTgHIATgFIgBgVIAMAQIAUgGIgLAQIAMAQIgUgGIgKARg");
	this.shape_4.setTransform(199.7,167.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFCC").s().p("AgEAJIgRAGIAKgPIgKgNIARAFIAJgPIABASIARAFIgRAFIAAATg");
	this.shape_5.setTransform(234.6,-149.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFCC").s().p("AgGALIgXAFIAPgQIgMgVIAWAJIANgSIgBAYIAWAHIgXAHIgCAXg");
	this.shape_6.setTransform(209,51);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFCC").s().p("AgIAJIgbgJIAbgIIABgdIAPAYIAcgIIgRAVIAQAYIgbgJIgQAWg");
	this.shape_7.setTransform(-233.2,103.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFCC").s().p("AgUANIgmgWIAsgEIANgrIAPApIAtgCIgiAcIAQApIgngWIggAbg");
	this.shape_8.setTransform(-196.2,-164.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFCC").s().p("AgMAKIgdgOIAggFIAGggIANAcIAggEIgWAVIAOAeIgdgOIgWAWg");
	this.shape_9.setTransform(-226.7,-123.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFCC").s().p("AgMALIgigLIAjgKIADglIATAeIAkgJIgXAbIAUAgIgjgNIgVAcg");
	this.shape_10.setTransform(-202.1,-27.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFCC").s().p("AAAAOIgQAKIAGgTIgQgMIAVABIAGgTIAFAUIAVABIgRAKIAFAUg");
	this.shape_11.setTransform(28,165.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFCC").s().p("AgGARIgdALIAQgbIgTgVIAeAGIAPgaIACAfIAeAJIgcAJIACAgg");
	this.shape_12.setTransform(133.9,-165.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFCC").s().p("AgLAVIgmALIAWggIgWgfIAmALIAWggIABAoIAmAMIgmANIgBAog");
	this.shape_13.setTransform(-62.7,-3.5);

	this.addChild(this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-236.8,-170.5,473.7,341);


(lib.stars3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFCC").s().p("AgGAMIgVAGIAMgSIgMgRIAVAGIAMgSIABAXIAVAGIgVAHIgBAXg");
	this.shape.setTransform(-54.1,-11.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFCC").s().p("AgGARIgdALIAQgaIgTgXIAeAHIAPgaIACAfIAeAIIgcALIABAeg");
	this.shape_1.setTransform(-61.3,153.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFCC").s().p("AgHAIIgZgFIAWgKIgDgZIAQARIAXgLIgLAYIASAQIgZgEIgKAXg");
	this.shape_2.setTransform(26.2,70.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFCC").s().p("AgGALIgXAFIAPgQIgMgVIAWAJIANgSIgBAXIAWAIIgXAHIgCAXg");
	this.shape_3.setTransform(-231,-87.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFCC").s().p("AAAAcIgjAVIANgmIgfgZIApABIANgmIAMAnIApACIgiAXIALAng");
	this.shape_4.setTransform(-240,-151.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFCC").s().p("AgFAFIgSAAIAPgJIgFgSIANALIAPgKIgGARIAPAJIgTAAIgFARg");
	this.shape_5.setTransform(-242.5,135.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFCC").s().p("AgBAVIgdARIAMgfIgZgVIAhACIANgeIAIAgIAgAEIgcAQIAIAhg");
	this.shape_6.setTransform(-217.5,3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFCC").s().p("AgQAMIgkgRIAogHIAHgnIARAjIApgGIgcAcIASAlIglgSIgcAcg");
	this.shape_7.setTransform(-182.7,158.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFCC").s().p("AgRALIgegTIAkgCIALgjIAMAiIAkgBIgcAVIAMAjIgfgTIgbAVg");
	this.shape_8.setTransform(240.7,-158.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFCC").s().p("AgGARIgdALIAQgaIgTgXIAeAHIAPgaIADAfIAdAIIgcALIABAeg");
	this.shape_9.setTransform(220.3,2.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFCC").s().p("AgIAJIgbgJIAbgIIABgcIAPAWIAcgIIgRAWIAQAYIgbgJIgQAWg");
	this.shape_10.setTransform(180.4,148.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFCC").s().p("AgJAHIgVgJIAXgFIAFgXIAJAVIAZgDIgRAQIAKAVIgVgKIgQARg");
	this.shape_11.setTransform(-133.8,98.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFCC").s().p("AgHAIIgZgEIAWgLIgDgZIAQARIAXgLIgLAYIASAQIgZgEIgKAXg");
	this.shape_12.setTransform(-188.2,-154.1);

	this.addChild(this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-245.5,-163.4,491,327);


(lib.stars2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFCC").s().p("AgQARIgygJIAtgXIgHgzIAjAjIAugWIgVAuIAjAjIgzgGIgWAtg");
	this.shape.setTransform(-192.9,106.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFCC").s().p("AgUAOIgmgXIAtgEIAMgrIAPApIAtgCIgiAcIAQApIgmgWIghAbg");
	this.shape_1.setTransform(204.9,-3.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFCC").s().p("AgJASIghAKIATgcIgTgbIAhAKIASgbIABAiIAhAKIghALIgBAig");
	this.shape_2.setTransform(-206.5,-108.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-210.8,-112.8,421.7,225.7);


(lib.stars1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFCC").s().p("AgIAJIgdgBIAXgPIgIgcIAWAQIAXgQIgIAcIAXAPIgdABIgJAbg");
	this.shape.setTransform(172,164.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFCC").s().p("AgGAGIgXAAIASgLIgGgXIARAOIASgOIgGAXIASALIgXAAIgHAXg");
	this.shape_1.setTransform(246.4,-132.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFCC").s().p("AgKAKIgigBIAbgSIgKghIAbATIAcgTIgKAhIAbASIgiABIgLAhg");
	this.shape_2.setTransform(-109.8,120.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFCC").s().p("AgOAIIgXgPIAdgBIAIgbIAJAbIAdAAIgXAQIAJAbIgYgQIgWARg");
	this.shape_3.setTransform(-212,139.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFCC").s().p("AgJAGIgQgJIAUgCIAFgTIAGASIAUAAIgPAKIAHAUIgRgLIgOAMg");
	this.shape_4.setTransform(-246.7,6.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFCC").s().p("AgJASIghAKIAUgcIgUgbIAhAKIATgbIABAiIAgAKIggALIgBAig");
	this.shape_5.setTransform(-170.7,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFCC").s().p("AgEAFIgRgBIANgIIgFgQIANAJIAOgJIgFAQIANAIIgRABIgFAQg");
	this.shape_6.setTransform(-73.7,-157.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFCC").s().p("AgQAMIgkgRIAogHIAHgoIASAkIAogGIgcAcIASAlIglgSIgbAcg");
	this.shape_7.setTransform(146.1,-162.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFCC").s().p("AgMANIgogMIAngNIgBgpIAYAfIAogNIgXAjIAaAfIgogLIgWAjg");
	this.shape_8.setTransform(-50.1,16.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFCC").s().p("AgJAHIgWgJIAYgEIAFgYIAKAVIAYgDIgRAQIALAVIgXgKIgPAQg");
	this.shape_9.setTransform(-226.6,57.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFCC").s().p("AgMANIgogMIAngOIAAgpIAYAgIAngNIgWAjIAZAfIgogKIgWAig");
	this.shape_10.setTransform(152.3,69.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFCC").s().p("AgVAXIhCgWIBBgXIABhFIApA2IBCgVIgmA6IAoA3IhDgTIgoA4g");
	this.shape_11.setTransform(-229.7,-155.2);

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-249.3,-168,498.8,336);


(lib.starturn = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVAOIglgXIAsgEIAMgrIAQApIAtgCIghAbIAPArIgngYIghAcg");
	this.shape.setTransform(0,0,0.826,0.826);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.9,-4.7,9.8,9.5);


(lib.startop_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.startop();
	this.instance.setTransform(-49.5,-49.5,0.486,0.486);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.5,-49.5,99.1,99.1);


(lib.starcolor = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.startop();
	this.instance.setTransform(-49.5,-49.5,0.486,0.486);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.5,-49.5,99.1,99.1);


(lib.starbottomcolor = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.startop();
	this.instance.setTransform(-49.5,-49.5,0.486,0.486);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.5,-49.5,99.1,99.1);


(lib.shortdiag = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shortdiagonal();
	this.instance.setTransform(-95.8,-95.3,0.482,0.482);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-95.8,-95.3,191.8,190.8);


(lib.ornamenttop = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ornament();
	this.instance.setTransform(-45,-44.4,0.601,0.601);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45,-44.4,90.2,89);


(lib.ornamentbottom = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ornament();
	this.instance.setTransform(-45,-44.4,0.601,0.601);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45,-44.4,90.2,89);


(lib.longdiag = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.longdiagonal();
	this.instance.setTransform(-202.4,-188.7,0.49,0.49);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-202.4,-188.7,404.9,377.5);


(lib.logofadeout = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.optimations();
	this.instance.setTransform(-79.5,-15.4,0.605,0.605);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-79.5,-15.4,159,30.9);


(lib.logofadein = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.optimations();
	this.instance.setTransform(-79.5,-15.4,0.605,0.605);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-79.5,-15.4,159,30.9);


(lib.logofade = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.optimations();
	this.instance.setTransform(-79.5,-15.4,0.605,0.605);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-79.5,-15.4,159,30.9);


(lib.logo = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.optimations();
	this.instance.setTransform(-79.5,-15.4,0.605,0.605);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-79.5,-15.4,159,30.9);


(lib.bkgrd = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#266423","#000000"],[0,1],0,0,0,0,0,313.9).s().p("EgnwAcrMAAAg5VMBPhAAAMAAAA5Vg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-254.5,-183.5,509.1,367.1);


(lib.text = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.textholidays("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-86.3,-61.2,172.7,122.5);


(lib.startopfade = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Tween3("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.5,-49.5,99.1,99.1);


(lib.startop2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.startopfade("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.5,-49.5,99.1,99.1);


(lib.starbottom = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Tween10("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.5,-49.5,99.1,99.1);


(lib.ornamenttopfade = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ornamenttop("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45,-44.4,90.2,89);


(lib.ornamentbott = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ornamentbottom("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45,-44.4,90.2,89);


// stage content:
(lib.holidaycardv4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("holiday2wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(150));

	// star-turn
	this.instance = new lib.starturn("synched",0);
	this.instance.setTransform(270.7,85.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(51).to({_off:false},0).wait(1).to({rotation:7.3},0).wait(1).to({rotation:14.7},0).wait(1).to({rotation:22},0).wait(1).to({rotation:29.4},0).wait(1).to({rotation:36.7},0).wait(1).to({rotation:44.1},0).wait(1).to({rotation:51.4},0).wait(1).to({rotation:58.8},0).wait(1).to({rotation:66.1},0).wait(1).to({rotation:73.5},0).wait(1).to({rotation:80.8},0).wait(1).to({rotation:88.1},0).wait(1).to({rotation:95.5},0).wait(1).to({rotation:102.8},0).wait(1).to({rotation:110.2},0).wait(1).to({rotation:117.5},0).wait(1).to({rotation:124.9},0).wait(1).to({rotation:132.2},0).wait(1).to({rotation:139.6},0).wait(1).to({rotation:146.9},0).wait(1).to({rotation:0,skewX:154.3,skewY:154.3},0).wait(1).to({skewX:161.6,skewY:161.7},0).wait(1).to({skewX:169,skewY:169},0).wait(1).to({skewX:176.3,skewY:176.4},0).wait(1).to({skewX:183.6,skewY:183.7},0).wait(1).to({skewX:191,skewY:191.1},0).wait(1).to({skewX:198.3,skewY:198.4},0).wait(1).to({skewX:205.7,skewY:205.7},0).wait(1).to({skewX:213,skewY:213.1},0).wait(1).to({skewX:220.4,skewY:220.4},0).wait(1).to({skewX:227.7,skewY:227.8},0).wait(1).to({skewX:235.1,skewY:235.1},0).wait(1).to({skewX:242.4,skewY:242.5},0).wait(1).to({skewX:249.8,skewY:249.8},0).wait(1).to({skewX:257.1,skewY:257.2},0).wait(1).to({skewX:264.4,skewY:264.5},0).wait(1).to({skewX:271.8,skewY:271.9},0).wait(1).to({skewX:279.1,skewY:279.2},0).wait(1).to({skewX:286.5,skewY:286.6},0).wait(1).to({skewX:293.8,skewY:293.9},0).wait(1).to({skewX:301.2,skewY:301.3},0).wait(1).to({skewX:308.5,skewY:308.6},0).wait(1).to({skewX:315.9,skewY:316},0).wait(1).to({skewX:323.2,skewY:323.3},0).wait(1).to({skewX:330.6,skewY:330.7},0).wait(1).to({skewX:337.9,skewY:338},0).wait(1).to({skewX:345.2,skewY:345.4},0).wait(1).to({skewX:352.6,skewY:352.7},0).wait(1).to({skewX:359.9,skewY:360.1},0).wait(1).to({scaleX:1.11,scaleY:1.11,skewX:367.3,skewY:367.4},0).wait(1).to({scaleX:1.23,scaleY:1.22,skewX:374.6,skewY:374.8},0).wait(1).to({scaleX:1.34,scaleY:1.34,skewX:382,skewY:382.1},0).wait(1).to({scaleX:1.46,scaleY:1.45,skewX:389.3,skewY:389.5},0).wait(1).to({scaleX:1.57,scaleY:1.56,skewX:396.7,skewY:396.8},0).wait(1).to({scaleX:1.68,scaleY:1.67,skewX:404,skewY:404.1},0).wait(1).to({scaleX:1.8,scaleY:1.79,skewX:411.4,skewY:411.5},0).wait(1).to({scaleX:1.79,scaleY:1.78,skewX:418.7,skewY:418.8},0).wait(1).to({scaleX:1.78,scaleY:1.76,skewX:426.1,skewY:426.2},0).wait(1).to({scaleX:1.77,scaleY:1.75,skewX:433.4,skewY:433.5},0).wait(1).to({scaleX:1.76,scaleY:1.74,skewX:440.7,skewY:440.9},0).wait(1).to({scaleX:1.75,scaleY:1.73,skewX:448.1,skewY:448.2},0).wait(1).to({scaleX:1.73,scaleY:1.72,skewX:455.4,skewY:455.6},0).wait(1).to({scaleX:1.72,scaleY:1.71,skewX:462.8,skewY:462.9},0).wait(1).to({scaleX:1.71,scaleY:1.7,skewX:470.1,skewY:470.3},0).wait(1).to({scaleX:1.7,scaleY:1.69,skewX:477.5,skewY:477.6},0).wait(1).to({scaleX:1.69,scaleY:1.68,skewX:484.8,skewY:485},0).wait(1).to({scaleX:1.68,scaleY:1.67,skewX:492.2,skewY:492.3},0).wait(1).to({scaleX:1.67,scaleY:1.66,skewX:499.5,skewY:499.7},0).wait(1).to({scaleX:1.66,scaleY:1.65,skewX:506.9,skewY:507},0).wait(1).to({scaleX:1.65,scaleY:1.64,skewX:514.2,skewY:514.4},0).wait(1).to({scaleX:1.64,scaleY:1.62,skewX:521.6,skewY:521.7},0).wait(1).to({scaleX:1.63,scaleY:1.61,skewX:528.9,skewY:529},0).wait(1).to({scaleX:1.62,scaleY:1.6,skewX:536.3,skewY:536.4},0).wait(1).to({scaleX:1.61,scaleY:1.59,skewX:543.6,skewY:543.7},0).wait(1).to({scaleX:1.6,scaleY:1.58,skewX:551,skewY:551.1},0).wait(1).to({scaleX:1.58,scaleY:1.57,skewX:558.3,skewY:558.4},0).wait(1).to({scaleX:1.57,scaleY:1.56,skewX:565.6,skewY:565.8},0).wait(1).to({scaleX:1.56,scaleY:1.55,skewX:573,skewY:573.1},0).wait(1).to({scaleX:1.55,scaleY:1.54,skewX:580.3,skewY:580.5},0).wait(1).to({scaleX:1.54,scaleY:1.53,skewX:587.7,skewY:587.8},0).wait(1).to({scaleX:1.53,scaleY:1.52,skewX:595,skewY:595.2},0).wait(1).to({scaleX:1.52,scaleY:1.51,skewX:602.4,skewY:602.5},0).wait(1).to({scaleX:1.51,scaleY:1.5,skewX:609.7,skewY:609.9},0).wait(1).to({scaleX:1.5,scaleY:1.49,skewX:617.1,skewY:617.2},0).wait(1).to({scaleX:1.49,scaleY:1.47,skewX:624.4,skewY:624.6},0).wait(1).to({scaleX:1.48,scaleY:1.46,skewX:631.8,skewY:631.9},0).wait(1).to({scaleX:1.47,scaleY:1.45,skewX:639.1,skewY:639.3},0).wait(1).to({scaleX:1.46,scaleY:1.44,skewX:646.5,skewY:646.6},0).wait(1).to({scaleX:1.45,scaleY:1.43,skewX:653.8,skewY:653.9},0).wait(1).to({scaleX:1.44,scaleY:1.42,skewX:661.2,skewY:661.3},0).wait(1).to({scaleX:1.42,scaleY:1.41,skewX:668.5,skewY:668.6},0).wait(1).to({scaleX:1.41,scaleY:1.4,skewX:675.9,skewY:676},0).wait(1).to({scaleX:1.4,scaleY:1.39,skewX:683.2,skewY:683.3},0).wait(1).to({scaleX:1.39,scaleY:1.38,skewX:690.5,skewY:690.7},0).wait(1).to({scaleX:1.38,scaleY:1.37,skewX:697.9,skewY:698},0).wait(1).to({scaleX:1.37,scaleY:1.36,skewX:705.2,skewY:705.4},0).wait(1).to({scaleX:1.36,scaleY:1.35,skewX:712.6,skewY:712.7},0).wait(1).to({scaleX:1.35,scaleY:1.33,skewX:719.9,skewY:720.1},0).wait(1));

	// text
	this.instance_1 = new lib.text("synched",0);
	this.instance_1.setTransform(268.8,69.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).wait(1).to({alpha:0.024},0).wait(1).to({alpha:0.048},0).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.095},0).wait(1).to({alpha:0.119},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.19},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.238},0).wait(1).to({alpha:0.262},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.31},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.381},0).wait(1).to({alpha:0.405},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.452},0).wait(1).to({alpha:0.476},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.524},0).wait(1).to({alpha:0.548},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.595},0).wait(1).to({alpha:0.619},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.69},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.738},0).wait(1).to({alpha:0.762},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.81},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.881},0).wait(1).to({alpha:0.905},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:0.952},0).wait(1).to({alpha:0.976},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.967},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.767},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.633},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.567},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.433},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.367},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.233},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0.033},0).wait(1).to({alpha:0},0).wait(1));

	// logo
	this.instance_2 = new lib.logo("synched",0);
	this.instance_2.setTransform(606.4,317.6);
	this.instance_2._off = true;

	this.instance_3 = new lib.optimations();
	this.instance_3.setTransform(314.9,302.2,0.605,0.605);

	this.instance_4 = new lib.logofade("synched",0);
	this.instance_4.setTransform(394.4,317.6);
	this.instance_4._off = true;

	this.instance_5 = new lib.logofadein("synched",0);
	this.instance_5.setTransform(394.4,317.6);
	this.instance_5.alpha = 0.5;
	this.instance_5._off = true;

	this.instance_6 = new lib.logofadeout("synched",0);
	this.instance_6.setTransform(394.4,317.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},11).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},20).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},0).wait(1).to({x:601.4},0).wait(1).to({x:596.3},0).wait(1).to({x:591.3},0).wait(1).to({x:586.2},0).wait(1).to({x:581.2},0).wait(1).to({x:576.1},0).wait(1).to({x:571.1},0).wait(1).to({x:566},0).wait(1).to({x:561},0).wait(1).to({x:555.9},0).wait(1).to({x:550.9},0).wait(1).to({x:545.8},0).wait(1).to({x:540.8},0).wait(1).to({x:535.7},0).wait(1).to({x:530.7},0).wait(1).to({x:525.6},0).wait(1).to({x:520.6},0).wait(1).to({x:515.5},0).wait(1).to({x:510.5},0).wait(1).to({x:505.4},0).wait(1).to({x:500.4},0).wait(1).to({x:495.4},0).wait(1).to({x:490.3},0).wait(1).to({x:485.3},0).wait(1).to({x:480.2},0).wait(1).to({x:475.2},0).wait(1).to({x:470.1},0).wait(1).to({x:465.1},0).wait(1).to({x:460},0).wait(1).to({x:455},0).wait(1).to({x:449.9},0).wait(1).to({x:444.9},0).wait(1).to({x:439.8},0).wait(1).to({x:434.8},0).wait(1).to({x:429.7},0).wait(1).to({x:424.7},0).wait(1).to({x:419.6},0).wait(1).to({x:414.6},0).wait(1).to({x:409.5},0).wait(1).to({x:404.5},0).wait(1).to({x:399.4},0).wait(1).to({x:394.4},0).to({_off:true},1).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(74).to({_off:false},0).wait(1).to({alpha:0.974},0).wait(1).to({alpha:0.947},0).wait(1).to({alpha:0.921},0).wait(1).to({alpha:0.895},0).wait(1).to({alpha:0.868},0).wait(1).to({alpha:0.842},0).wait(1).to({alpha:0.816},0).wait(1).to({alpha:0.789},0).wait(1).to({alpha:0.763},0).wait(1).to({alpha:0.737},0).wait(1).to({alpha:0.711},0).wait(1).to({alpha:0.684},0).wait(1).to({alpha:0.658},0).wait(1).to({alpha:0.632},0).wait(1).to({alpha:0.605},0).wait(1).to({alpha:0.579},0).wait(1).to({alpha:0.553},0).wait(1).to({alpha:0.526},0).wait(1).to({alpha:0.5},0).to({_off:true},1).wait(56));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(94).to({_off:false},0).wait(1).to({alpha:0.521},0).wait(1).to({alpha:0.542},0).wait(1).to({alpha:0.563},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.604},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.646},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.688},0).wait(1).to({alpha:0.708},0).wait(1).to({alpha:0.729},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.771},0).wait(1).to({alpha:0.792},0).wait(1).to({alpha:0.813},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.854},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.896},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:0.938},0).wait(1).to({alpha:0.958},0).wait(1).to({alpha:0.979},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(119).to({_off:false},0).wait(1).to({alpha:0.967},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.767},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.633},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.567},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.433},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.367},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.233},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0.033},0).wait(1).to({alpha:0},0).wait(1));

	// Layer 15
	this.instance_7 = new lib.ornamenttopfade("synched",0);
	this.instance_7.setTransform(455.6,96.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(136).to({_off:false},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.077},0).wait(1).to({alpha:0},0).wait(1));

	// ornament-top
	this.instance_8 = new lib.ornamenttop("synched",0);
	this.instance_8.setTransform(455.6,96.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(13).to({startPosition:0},0).to({startPosition:0},38).to({startPosition:0},48).to({_off:true},37).wait(14));

	// Layer 14
	this.instance_9 = new lib.ornamentbott("synched",0);
	this.instance_9.setTransform(240.8,312);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(136).to({_off:false},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.077},0).wait(1).to({alpha:0},0).wait(1));

	// ornament-bottom
	this.instance_10 = new lib.ornamentbottom("synched",0);
	this.instance_10.setTransform(240.8,312);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(13).to({startPosition:0},0).to({startPosition:0},38).to({startPosition:0},48).to({_off:true},37).wait(14));

	// Layer 13
	this.instance_11 = new lib.starbottom("synched",0);
	this.instance_11.setTransform(350.2,219.2);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(136).to({_off:false},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.077},0).wait(1).to({alpha:0},0).wait(1));

	// star-bottom
	this.instance_12 = new lib.startop();
	this.instance_12.setTransform(300.7,169.7,0.486,0.486);

	this.instance_13 = new lib.starcolor("synched",0);
	this.instance_13.setTransform(350.2,219.2);
	this.instance_13._off = true;

	this.instance_14 = new lib.starbottomcolor("synched",0);
	this.instance_14.setTransform(350.2,219.2);
	this.instance_14._off = true;
	this.instance_14.filters = [new cjs.ColorFilter(0, 0, 0, 1, 101, 200, 208, 0)];
	this.instance_14.cache(-51,-51,103,103);

	this.instance_15 = new lib.Tween10("synched",0);
	this.instance_15.setTransform(350.2,219.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).to({state:[{t:this.instance_13}]},13).to({state:[{t:this.instance_14}]},38).to({state:[{t:this.instance_15}]},48).to({state:[]},37).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(13).to({_off:false},0).to({_off:true},38).wait(99));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(13).to({_off:false},38).to({_off:true},48).wait(51));

	// Layer 12
	this.instance_16 = new lib.startop2("synched",0);
	this.instance_16.setTransform(126.2,125);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(136).to({_off:false},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.077},0).wait(1).to({alpha:0},0).wait(1));

	// star -top
	this.instance_17 = new lib.startop_1("synched",0);
	this.instance_17.setTransform(126.2,125);
	this.instance_17.filters = [new cjs.ColorFilter(0, 0, 0, 1, 101, 200, 208, 0)];
	this.instance_17.cache(-51,-51,103,103);

	this.instance_18 = new lib.Tween3("synched",0);
	this.instance_18.setTransform(126.2,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17}]}).to({state:[{t:this.instance_18}]},51).to({state:[]},85).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({_off:true},51).wait(99));

	// short-diagonal
	this.instance_19 = new lib.shortdiagonal();
	this.instance_19.setTransform(-4.8,-5.8,0.482,0.482);

	this.instance_20 = new lib.shortdiag("synched",0);
	this.instance_20.setTransform(91,89.6);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19}]}).to({state:[{t:this.instance_20}]},136).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(136).to({_off:false},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.077},0).wait(1).to({alpha:0},0).wait(1));

	// long-diagonal
	this.instance_21 = new lib.longdiagonal();
	this.instance_21.setTransform(100.7,-6.5,0.49,0.49);

	this.instance_22 = new lib.longdiag("synched",0);
	this.instance_22.setTransform(303.1,182.2);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21}]}).to({state:[{t:this.instance_22}]},136).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(136).to({_off:false},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.077},0).wait(1).to({alpha:0},0).wait(1));

	// stars4
	this.instance_23 = new lib.stars4("synched",0);
	this.instance_23.setTransform(262.5,185.9,1,1,180);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(92).to({_off:false},0).wait(1).to({alpha:0.05},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.65},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.973},0).wait(1).to({alpha:0.946},0).wait(1).to({alpha:0.919},0).wait(1).to({alpha:0.892},0).wait(1).to({alpha:0.865},0).wait(1).to({alpha:0.838},0).wait(1).to({alpha:0.811},0).wait(1).to({alpha:0.784},0).wait(1).to({alpha:0.757},0).wait(1).to({alpha:0.73},0).wait(1).to({alpha:0.703},0).wait(1).to({alpha:0.676},0).wait(1).to({alpha:0.649},0).wait(1).to({alpha:0.622},0).wait(1).to({alpha:0.595},0).wait(1).to({alpha:0.568},0).wait(1).to({alpha:0.541},0).wait(1).to({alpha:0.514},0).wait(1).to({alpha:0.486},0).wait(1).to({alpha:0.459},0).wait(1).to({alpha:0.432},0).wait(1).to({alpha:0.405},0).wait(1).to({alpha:0.378},0).wait(1).to({alpha:0.351},0).wait(1).to({alpha:0.324},0).wait(1).to({alpha:0.297},0).wait(1).to({alpha:0.27},0).wait(1).to({alpha:0.243},0).wait(1).to({alpha:0.216},0).wait(1).to({alpha:0.189},0).wait(1).to({alpha:0.162},0).wait(1).to({alpha:0.135},0).wait(1).to({alpha:0.108},0).wait(1).to({alpha:0.081},0).wait(1).to({alpha:0.054},0).wait(1).to({alpha:0.027},0).wait(1).to({alpha:0},0).wait(1));

	// stars3
	this.instance_24 = new lib.stars3("synched",0);
	this.instance_24.setTransform(252.1,193.5);
	this.instance_24.alpha = 0;
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(75).to({_off:false},0).wait(1).to({alpha:0.059},0).wait(1).to({alpha:0.118},0).wait(1).to({alpha:0.176},0).wait(1).to({alpha:0.235},0).wait(1).to({alpha:0.294},0).wait(1).to({alpha:0.353},0).wait(1).to({alpha:0.412},0).wait(1).to({alpha:0.471},0).wait(1).to({alpha:0.529},0).wait(1).to({alpha:0.588},0).wait(1).to({alpha:0.647},0).wait(1).to({alpha:0.706},0).wait(1).to({alpha:0.765},0).wait(1).to({alpha:0.824},0).wait(1).to({alpha:0.882},0).wait(1).to({alpha:0.941},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.977},0).wait(1).to({alpha:0.955},0).wait(1).to({alpha:0.932},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:0.886},0).wait(1).to({alpha:0.864},0).wait(1).to({alpha:0.841},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.795},0).wait(1).to({alpha:0.773},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.705},0).wait(1).to({alpha:0.682},0).wait(1).to({alpha:0.659},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.614},0).wait(1).to({alpha:0.591},0).wait(1).to({alpha:0.568},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.523},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.477},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.432},0).wait(1).to({alpha:0.409},0).wait(1).to({alpha:0.386},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.341},0).wait(1).to({alpha:0.318},0).wait(1).to({alpha:0.295},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.227},0).wait(1).to({alpha:0.205},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.159},0).wait(1).to({alpha:0.136},0).wait(1).to({alpha:0.114},0).wait(1).to({alpha:0.091},0).wait(1).to({alpha:0.068},0).wait(1).to({alpha:0.045},0).wait(1).to({alpha:0.023},0).wait(1).to({alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// star2
	this.instance_25 = new lib.stars2("synched",0);
	this.instance_25.setTransform(235,197.4);
	this.instance_25.alpha = 0;
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(39).to({_off:false},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.188},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.313},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.438},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.563},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.688},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.813},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.938},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.973},0).wait(1).to({alpha:0.946},0).wait(1).to({alpha:0.919},0).wait(1).to({alpha:0.892},0).wait(1).to({alpha:0.865},0).wait(1).to({alpha:0.838},0).wait(1).to({alpha:0.811},0).wait(1).to({alpha:0.784},0).wait(1).to({alpha:0.757},0).wait(1).to({alpha:0.73},0).wait(1).to({alpha:0.703},0).wait(1).to({alpha:0.676},0).wait(1).to({alpha:0.649},0).wait(1).to({alpha:0.622},0).wait(1).to({alpha:0.595},0).wait(1).to({alpha:0.568},0).wait(1).to({alpha:0.541},0).wait(1).to({alpha:0.514},0).wait(1).to({alpha:0.486},0).wait(1).to({alpha:0.459},0).wait(1).to({alpha:0.432},0).wait(1).to({alpha:0.405},0).wait(1).to({alpha:0.378},0).wait(1).to({alpha:0.351},0).wait(1).to({alpha:0.324},0).wait(1).to({alpha:0.297},0).wait(1).to({alpha:0.27},0).wait(1).to({alpha:0.243},0).wait(1).to({alpha:0.216},0).wait(1).to({alpha:0.189},0).wait(1).to({alpha:0.162},0).wait(1).to({alpha:0.135},0).wait(1).to({alpha:0.108},0).wait(1).to({alpha:0.081},0).wait(1).to({alpha:0.054},0).wait(1).to({alpha:0.027},0).wait(1).to({alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(41));

	// stars
	this.instance_26 = new lib.stars1("synched",0);
	this.instance_26.setTransform(253.6,182.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(1).to({alpha:0.982},0).wait(1).to({alpha:0.964},0).wait(1).to({alpha:0.945},0).wait(1).to({alpha:0.927},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:0.891},0).wait(1).to({alpha:0.873},0).wait(1).to({alpha:0.855},0).wait(1).to({alpha:0.836},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.782},0).wait(1).to({alpha:0.764},0).wait(1).to({alpha:0.745},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.709},0).wait(1).to({alpha:0.691},0).wait(1).to({alpha:0.673},0).wait(1).to({alpha:0.655},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.618},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.582},0).wait(1).to({alpha:0.564},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.527},0).wait(1).to({alpha:0.509},0).wait(1).to({alpha:0.491},0).wait(1).to({alpha:0.473},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.436},0).wait(1).to({alpha:0.418},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.382},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.345},0).wait(1).to({alpha:0.327},0).wait(1).to({alpha:0.309},0).wait(1).to({alpha:0.291},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.255},0).wait(1).to({alpha:0.236},0).wait(1).to({alpha:0.218},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.164},0).wait(1).to({alpha:0.145},0).wait(1).to({alpha:0.127},0).wait(1).to({alpha:0.109},0).wait(1).to({alpha:0.091},0).wait(1).to({alpha:0.073},0).wait(1).to({alpha:0.055},0).wait(1).to({alpha:0.036},0).wait(1).to({alpha:0.018},0).wait(1).to({alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(41));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#266423","#000000"],[0,1],0,0,0,0,0,313.9).s().p("EgnwAcrMAAAg5VMBPhAAAMAAAA5Vg");
	this.shape.setTransform(253.6,181.5);

	this.instance_27 = new lib.bkgrd("synched",0);
	this.instance_27.setTransform(253.6,181.5);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance_27}]},136).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(136).to({_off:false},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.077},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(247.2,173.5,513,377.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;