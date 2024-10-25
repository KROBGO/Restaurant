import { Div } from "./DomELement";

const reservation = new Div("section", {
    classes: ["reservation"]
});

const container = new Div("div", {
    classes: ["container"]
});
container.appendTo(reservation.element);

const form = new Div("div", {
    classes: ["form", "reservation-form", "bg-black-10"]
});
form.appendTo(container.element);

const formLeft = new Div("form", {
    classes: ["form-left"],
    attributes: { "action": "" }
});
formLeft.appendTo(form.element);

const headline1 = new Div("h2", {
    classes: ["headline-1", "text-center"],
    textContent: "Online Reservation"
});
headline1.appendTo(formLeft.element);

const formText = new Div("p", {
    classes: ["form-text", "text-center"],
    innerHTML: 'Booking request <a href="tel:+88123123456" class="link">+88-123-123456</a> or fill out the order form'
});
formText.appendTo(formLeft.element);

const inputWrapper = new Div("div", {
    classes: ["input-wrapper"]
});
inputWrapper.appendTo(formLeft.element);

const inputText1 = new Div("input", {
    classes: ["input-field"],
    attributes: { "type": "text", "name": "name", "autocomplete": "off", "placeholder": "Your name" }
});
inputText1.appendTo(inputWrapper.element);

const inputText2 = new Div("input", {
    classes: ["input-field"],
    attributes: { "type": "tel", "name": "phone", "placeholder": "Phone Number", "autocomplete": "off" }
});
inputText2.appendTo(inputWrapper.element);

const inputWrapper2 = new Div("div", {
    classes: ["input-wrapper"]
});
inputWrapper2.appendTo(formLeft.element);

const iconWrapper = new Div("div", {
    classes: ["icon-wrapper"],
    innerHTML: `<ion-icon name="person-outline" aria-hidden="true"></ion-icon>`
});
iconWrapper.appendTo(inputWrapper2.element);

const select = new Div("select", {
    classes: ["input-field"],
    attributes: { "name": "person" }
});
select.appendTo(iconWrapper.element);

const createOption = (optionValue, numberValue) => {
    const opt = new Div("option", {
        textContent: optionValue,
        attributes: { "value": `${numberValue}-person` }
    });
    opt.appendTo(select.element);
};

createOption("1 Person", 1);
createOption("2 Person", 2);
createOption("3 Person", 3);
createOption("4 Person", 4);
createOption("5 Person", 5);
createOption("6 Person", 6);
createOption("7 Person", 7);

const ionIcon = new Div("ion-icon", {
    attributes: { "name": "chevron-down", "aria-hidden": "true" }
});
ionIcon.appendTo(iconWrapper.element);

const iconWrapper2 = new Div("div", {
    classes: ["icon-wrapper"],
    innerHTML: `<ion-icon name="calendar-clear-outline" aria-hidden="true"></ion-icon>`
});
iconWrapper2.appendTo(inputWrapper2.element);

const inputText3 = new Div("input", {
    classes: ["input-field"],
    attributes: { "type": "date", "name": "reservation-date" }
});
inputText3.appendTo(iconWrapper2.element);

const ionIcon2 = new Div("ion-icon", {
    attributes: { "name": "chevron-down", "aria-hidden": "true" }
});
ionIcon2.appendTo(iconWrapper2.element);

const iconWrapper3 = new Div("div", {
    classes: ["icon-wrapper"],
    innerHTML: `<ion-icon name="time-outline" aria-hidden="true"></ion-icon>`
});
iconWrapper3.appendTo(inputWrapper2.element);

const select2 = new Div("select", {
    classes: ["input-field"],
    attributes: { "name": "time" }
});
select2.appendTo(iconWrapper3.element);

const createOption2 = (optionValue, timeValue) => {
    const opt = new Div("option", {
        textContent: optionValue,
        attributes: { "value": timeValue }
    });
    opt.appendTo(select2.element);
};

createOption2("08 : 00 am", "08:00am");
createOption2("09 : 00 am", "09:00am");
createOption2("10 : 00 am", "10:00am");
createOption2("11 : 00 am", "11:00am");
createOption2("12 : 00 am", "12:00am");
createOption2("01 : 00 pm", "01:00pm");
createOption2("02 : 00 pm", "02:00pm");
createOption2("03 : 00 pm", "03:00pm");
createOption2("04 : 00 pm", "04:00pm");
createOption2("05 : 00 pm", "05:00pm");
createOption2("06 : 00 pm", "06:00pm");
createOption2("07 : 00 pm", "07:00pm");
createOption2("08 : 00 pm", "08:00pm");
createOption2("09 : 00 pm", "09:00pm");
createOption2("10 : 00 pm", "10:00pm");

const ionIcon3 = new Div("ion-icon", {
    attributes: { "name": "chevron-down", "aria-hidden": "true" }
});
ionIcon3.appendTo(iconWrapper3.element);

const textArea = new Div("textarea", {
    classes:["input-field"],
    attributes: { "name": "message", "placeholder": "Message", "autocomplete":"off"}
});
textArea.appendTo(formLeft.element);

const button = new Div("button", {
    classes:["btn","btn-secondary"],
    attributes: { "type": "submit"}
});
button.appendTo(formLeft.element);

const span1 = new Div("span", {
    classes:["text","text-1"],
    textContent:"Book A Table",
});
span1.appendTo(button.element);

const span2 = new Div("span", {
    classes:["text","text-2"],
    textContent:"Book A Table",
    attributes: { "aria-hidden": "true"}
});
span2.appendTo(button.element);


const formRight = new Div("div", {
    classes: ["form-right","text-center"],
});
formRight.appendTo(form.element);

const headline2= new Div("h2", {
    classes: ["headline-1","text-center"],
    textContent:"Contact Us"
});
headline2.appendTo(formRight.element);

const contactLabel= new Div("p", {
    classes: ["contact-label"],
    textContent:"Booking Request"
});
contactLabel.appendTo(formRight.element);

const contactNumber= new Div("a", {
    classes: ["contact-number","body-1","hover-underline"],
    textContent:"+88-123-123456",
    attributes:{"href":"tel:+88123123456"}
});
contactNumber.appendTo(formRight.element);

const separator= new Div("div", {
    classes: ["separator"],
});
separator.appendTo(formRight.element);

const contactLabel2= new Div("p", {
    classes: ["contact-label"],
    textContent:"Location",
});
contactLabel2.appendTo(formRight.element);

const address= new Div("address", {
    classes: ["body-4"],
    innerHTML:`Restaurant St, Delicious City, <br> London 9578, UK`,
});
address.appendTo(formRight.element);

const contactLabel3= new Div("p", {
    classes: ["contact-label"],
    textContent:"Lunch Time",
});
contactLabel3.appendTo(formRight.element);

const body4= new Div("p", {
    classes: ["body-4"],
    innerHTML:`Monday to Sunday <br> 11.00 am - 2.30pm`,
});
body4.appendTo(formRight.element);

const contactLabel4= new Div("p", {
    classes: ["contact-label"],
    textContent:"Dinner Time",
});
contactLabel4.appendTo(formRight.element);

const body5= new Div("p", {
    classes: ["body-4"],
    innerHTML:`Monday to Sunday <br> 05.00 pm - 10.00pm`,
});
body5.appendTo(formRight.element);

export { reservation };
