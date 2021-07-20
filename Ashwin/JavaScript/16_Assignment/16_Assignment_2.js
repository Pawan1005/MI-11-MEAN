class TextFontStyle {
    constructor(){
        this.info = document.getElementById('info');
        this.legendColor = document.getElementById('color');
        this.legendFontSize = document.getElementById('fontSize');
        this.legendFontStyle = document.getElementById('fontStyle');
    }
    redColor() {
        this.info.style.color = 'red';
        this.legendColor.style.color = 'red';
    }
    blueColor() {
        this.info.style.color = 'blue';
        this.legendColor.style.color = 'blue';
    }
    greenColor() {
        this.info.style.color = 'green';
        this.legendColor.style.color = 'green';
    }
    fontSizeSmall() {
        this.info.style.fontSize = "small";
        this.legendFontSize.style.fontSize = "small";
    }
    fontSizeMedium() {
        this.info.style.fontSize = "medium";
        this.legendFontSize.style.fontSize = "medium";
    }
    fontSizeLarge() {
        this.info.style.fontSize = "x-large";
        this.legendFontSize.style.fontSize = "x-large"
    }
    fontStyleTimes() {
        this.info.style.fontFamily = "'Times New Roman', Times, serif";
        this.legendFontStyle.style.fontFamily = "'Times New Roman', Times, serif";
    }
    fontStyleArial() {
        this.info.style.fontFamily = "Arial, Helvetica, sans-serif";
        this.legendFontStyle.style.fontFamily = "Arial, Helvetica, sans-serif";
    }
    fontStyleMonospace() {
        this.info.style.fontFamily = "monospace";
        this.legendFontStyle.style.fontFamily = "monospace";
    }
}
var textFontAction = null;
function textRedColor() {
    textFontAction = new TextFontStyle();
    textFontAction.redColor();
}
function textBlueColor() {
    textFontAction = new TextFontStyle();
    textFontAction.blueColor();
}
function textGreenColor() {
    textFontAction = new TextFontStyle();
    textFontAction.greenColor();
}
function textFontSizeSmall() {
    textFontAction = new TextFontStyle();
    textFontAction.fontSizeSmall();
}
function textFontSizeMedium() {
    textFontAction = new TextFontStyle();
    textFontAction.fontSizeMedium();
}
function textFontSizeLarge() {
    textFontAction = new TextFontStyle();
    textFontAction.fontSizeLarge();
}
function textFontStyleTimes() {
    textFontAction = new TextFontStyle();
    textFontAction.fontStyleTimes();
}
function textFontStyleArial() {
    textFontAction = new TextFontStyle();
    textFontAction.fontStyleArial();
}
function textFontStyleMonospace() {
    textFontAction = new TextFontStyle();
    textFontAction.fontStyleMonospace();
}
