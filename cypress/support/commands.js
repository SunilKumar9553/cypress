import 'cypress-file-upload';
require('cypress-downloadfile/lib/downloadFileCommand')
const addContext = require('mochawesome/addContext');
import "cypress-wait-until";
import "cypress-real-events/support";

Cypress.Commands.add("text", { prevSubject: true }, (subject, options) => {
  return subject.text();
});

Cypress.Commands.add("reportLog", (context) => {
  cy.once("test:after:run", (test) => addContext({ test }, context))
});

Cypress.Commands.add('validateText', (element, value) => {

  if (element.includes("//")) {
    cy.xpath(element).should('have.text', value)
  }
  else {
    cy.get(element).should('have.text', value)
  }
});

Cypress.Commands.add("elementToVisible", (element) => {
  if (element.includes("//")) {
    cy.xpath(element).should('be.visible');
  }
  else {
    cy.get(element).should('be.visible');
  }
})
Cypress.Commands.add("elementTodisabled", (element) => {
  if (element.includes("//")) {
    cy.xpath(element).should('be.disabled');
  }
  else {
    cy.get(element).should('be.disabled');
  }
})
Cypress.Commands.add("elementToNotdisabled", (element) => {
  if (element.includes("//")) {
    cy.xpath(element).should('not.be.disabled');
  }
  else {
    cy.get(element).should('not.be.disabled');
  }
})

Cypress.Commands.add("elementNotVisible", (element) => {
  cy.xpath(element).should('not.exist');
})


Cypress.Commands.add("selectDropDownValue", (element, value) => {
  if (element.includes("//")) {
    cy.xpath(element).select(value);
  }
  else {
    cy.get(element).select(value);
  }
})

Cypress.Commands.add("EnterTextShadowDOM", (element, value) => {
  if (element.includes("//")) {
    cy.xpath(element).shadow().find('input').type(value)
  }
  else {
    cy.get(element).shadow().find('input').type(value)
  }
})

Cypress.Commands.add("clickButtonShadowDOM", (element, css) => {
  if (element.includes("//")) {
    cy.xpath(element).shadow().find(css).click({ force: true })
  }
  else {
    cy.get(element).shadow().find(css).click({ force: true })
  }
})

Cypress.Commands.add("selectShadowDOM", (element, value) => {
  if (element.includes("//")) {
    cy.xpath(element).shadow().find('input').type(value, { force: true })
  }
  else {
    cy.get(element).shadow().find('input').type(value, { force: true })
  }
})

Cypress.Commands.add("clickButtonShadowDOM1", (element, buttontext) => {
  if (element.includes("//")) {
    cy.xpath(element).shadow().find('button').contains(buttontext).click({ force: true })
  }
  else {
    cy.get(element).shadow().find('button').contains(buttontext).click({ force: true })
  }
})

Cypress.Commands.add("selectInputDOMhaveVal", (element, val) => {
  cy.xpath(element).shadow().find("input").should('have.value', val);
});

Cypress.Commands.add("elementToNotExists", (element) => {
  if (element.includes("//")) {
    cy.xpath(element).should('not.exist');
  }
  else {
    cy.get(element).should('not.exist');
  }
});

Cypress.Commands.add("elementToExists", (element) => {
  if (element.includes("//")) {
    cy.xpath(element).should('exist');
  }
  else {
    cy.get(element).should('exist');
  }
});

Cypress.Commands.add("elementToNotVisible", (element) => {
  if (element.includes("//")) {
    cy.xpath(element).should('be.not.visible');
  }
  else {
    cy.get(element).should('be.not.visible');
  }
})

Cypress.Commands.add("enterText", (element, value) => {
  if (element.includes("//")) {
    cy.xpath(element).type(value);
  }
  else {
    cy.get(element).type(value);
  }
})

Cypress.Commands.add("clickButton", (element) => {
  if (element.includes("//")) {
    cy.xpath(element).click();
  }
  else {
    cy.get(element).click();
  }
})

Cypress.Commands.add("clickButtonForce", (element) => {
  if (element.includes("//")) {
    cy.xpath(element).click({ force: true });
  }
  else {
    cy.get(element).click({ force: true });
  }
})

Cypress.Commands.add("clickButtonForceWithText", (element, text) => {
  cy.xpath(element).find("button").click({ force: true });
})

Cypress.Commands.add("clickButtonMultiple", (element) => {
  cy.xpath(element).click({ multiple: true, force: true });
})

Cypress.Commands.add("clickSpeceficButton", (element, index) => {
  cy.xpath(element).eq(index).click({ force: true });
})

Cypress.Commands.add("RightclickButtonForce", (element) => {
  if (element.includes("//")) {
    cy.xpath(element).click({ force: true });
  }
  else {
    cy.get(element).click({ force: true });
  }
})

Cypress.Commands.add("parseXlsx", (inputFile) => {
  return cy.task('parseXlsx', { filePath: inputFile })
});

Cypress.Commands.add("reportLogKV", (context, value) => {
  cy.once("test:after:run", (test) => addContext({ test }, {
    title: context,
    value: value
  }))
});

Cypress.Commands.add("CheckAndClick", (dialog, element, css) => {

  cy.get('body').then(($body) => {
    if ($body.find(dialog).length > 0) {
      if (element.includes("//")) {
        cy.xpath(element).shadow().find(css).click({ force: true })
      }
      else {
        cy.get(element).shadow().find(css).click({ force: true })
      }
    }
  })
});

Cypress.Commands.add("selectShadowDOMClear", (element, value) => {
  if (element.includes("//")) {
    cy.xpath(element).shadow().find('input').type('{selectall}{backspace}' + value, { force: true })
  }
  else {
    cy.get(element).shadow().find('input').type('{selectall}{backspace}' + value, { force: true })
  }
});

Cypress.Commands.add("EnterTextAreaShadowDOM", (element, value) => {
  if (element.includes("//")) {
    cy.xpath(element).shadow().find('textarea').type(value);
  }
  else {
    cy.get(element).shadow().find('textarea').type(value);
  }
})

Cypress.Commands.add("EnterTextShadowDOMRealTypeTest", (element, value) => {
  if (element.includes("//")) {
    cy.xpath(element).shadow().find('input').type(value, { force: true }).realType('1' + '{backspace}');
  }
  else {
    cy.get(element).shadow().find('input').type('{selectall}{backspace}' + value, { force: true }).realType('1' + '{backspace}');
  }
});

Cypress.Commands.add("EnterTextShadowDOMRealType", (element, value) => {
  if (element.includes("//")) {
    cy.xpath(element).shadow().find('input').type('{selectall}{backspace}' + value, { force: true }).realType('1' + '{backspace}');
  }
  else {
    cy.get(element).shadow().find('input').type('{selectall}{backspace}' + value, { force: true }).realType('1' + '{backspace}');
  }
});

Cypress.Commands.add("realClickButton", (element) => {
  if (element.includes("//")) {
    cy.xpath(element).realClick();
  }
  else {
    cy.get(element).realClick();
  }
})

Cypress.Commands.add("realHoverButton", (element) => {
  if (element.includes("//")) {
    cy.xpath(element).realHover();
  }
  else {
    cy.get(element).realHover();
  }
})

Cypress.Commands.add("scrollAndClick", (element) => {
  if (element.includes("//")) {
    cy.xpath(element).scrollIntoView().click();
  }
  else {
    cy.get(element).scrollIntoView().click();
  }
})

Cypress.Commands.add("scroll", (element) => {
  if (element.includes("//")) {
    cy.xpath(element).scrollIntoView();
  }
  else {
    cy.get(element).scrollIntoView();
  }
})

Cypress.Commands.add("validateAttribute", (element, value) => {
  if (element.includes("//")) {
    cy.xpath(element).should('have.attr', '' + value + '');
  }
  else {
    cy.get(element).should('have.attr', '' + value + '');
  }
})

Cypress.Commands.add("scrollAndRightClick", (element, height, width) => {
  if (element.includes("//")) {
    cy.xpath(element).scrollIntoView().rightclick(width, height);
  }
  else {
    cy.get(element).scrollIntoView().rightclick(width, height);
  }
})


Cypress.Commands.add("customColor", (element, style, value) => {
  if (element.includes("//")) {
    cy.xpath(element).shadow().find('div').should('have.css', style, value)
  }
  else {
    cy.get(element).shadow().find('div').should('have.css', style, value)
  }
});

Cypress.Commands.add('fileupload', (element, fixturefilepath) => {
  if (element.includes("//")) {
    cy.xpath(element).shadow().find('input').attachFile(fixturefilepath);
  }
  else {
    cy.get(element).shadow().find('input').attachFile(fixturefilepath);
  }
})


Cypress.Commands.add('containsText', (element, value) => {
  if (element.includes("//")) {
    cy.xpath(element).should('include.text', value)
  }
  else {
    cy.get(element).should('include.text', value)
  }})
Cypress.Commands.add("MouseoverAndclickButton", (element) => {
  if (element.includes("//")) {
    cy.xpath(element).trigger('mouseover').click();
  }
  else {
    cy.get(element).trigger('mouseover').click();
  }
})
Cypress.Commands.add("MouseoverShadowElement", (element, css) => {
  if (element.includes("//")) {
    cy.xpath(element).shadow().find(css).trigger('mouseover');
  }
  else {
    cy.get(element).shadow().find(css).trigger('mouseover');
  }
})

Cypress.Commands.add("Mouseoverelementreal", (element) => {
  if (element.includes("//")) {
    cy.xpath(element).realHover();
  }
  else {
    cy.get(element).realHover();
  }
})

Cypress.Commands.add("ValidateAttributeValueShadowDOM", (element, atributename, value) => {
  if (element.includes("//")) {
    cy.xpath(element).shadow().find('textarea').invoke('attr', atributename).should('eq', value)
  }
  else {
    cy.get(element).shadow().find('textarea').invoke('attr', atributename).should('eq', value);
  }
})

Cypress.Commands.add("isExistPDF", (inputFile) => {
  return cy.task('isExistPDF', { filePath: inputFile })
})

Cypress.Commands.add("ValidateTextAreaShadowDOM", (element, value, css) => {
  if (element.includes("//")) {
    cy.xpath(element).shadow().find(css).should('have.value', value);
  }
  else {
    cy.get(element).shadow().find(css).should('have.value', value);
  }
})

Cypress.Commands.add("ScrollNelementToVisible", (element) => {
  if (element.includes("//")) {
    cy.xpath(element).scrollIntoView().should('be.visible');
  }
  else {
    cy.get(element).scrollIntoView().should('be.visible');
  }
})

Cypress.Commands.add("realClickButtonShadowDOM", (element, css) => {
  if (element.includes("//")) {
    cy.xpath(element).shadow().find(css).realClick({ force: true })
  }
  else {
    cy.get(element).shadow().find(css).realClick({ force: true })
  }
})

Cypress.Commands.add("validateAttributeInsideShadowDOM", (element, css, value) => {
  if (element.includes("//")) {
    cy.xpath(element).shadow().find(css).should('have.attr', '' + value + '');
  }
  else {
    cy.get(element).shadow().find(css).should('have.attr', '' + value + '');
  }
})

Cypress.Commands.add("validateAttributeAbsenceInsideShadowDOM", (element, css, value) => {
  if (element.includes("//")) {
    cy.xpath(element).shadow().find(css).should('not.have.attr', '' + value + '');
  }
  else {
    cy.get(element).shadow().find(css).should('not.have.attr', '' + value + '');
  }
})



Cypress.Commands.add("multipleClick", (element) => {
  if (element.includes("//")) {
    cy.xpath(element).click({ multiple: true})
  }
  else {
    cy.get(element).click({multiple: true})
  }
})

Cypress.Commands.add("shadowUncheck", (element) => {
  if (element.includes("//")) {
    cy.xpath(element).shadow().find('input').uncheck({force: true});
  }
  else {
    cy.get(element).shadow().find('input').uncheck({force: true});
  }
});

Cypress.Commands.add("shadowCheckForce", (element) => {
  if (element.includes("//")) {
    cy.xpath(element).shadow().find('input').check({force: true});
  }
  else {
    cy.get(element).shadow().find('input').check({force: true});
  }
});


Cypress.Commands.add("forceVisit", url => {
  cy.window().then(win => {
    return win.open(url, '_self');
  });
});


//   else {
//     cy.get(element).realClick();
//   }
// })



Cypress.Commands.add("realTypeInput", (element, val1, val2) => {
  cy.xpath(element).shadow().find("input").type(val1,{ force: true }).realType(`${val2},{backspace}`);
});

Cypress.Commands.add("shadowCheckboxSelect", (element) => {
  cy.xpath(element).shadow().find('[type="checkbox"]').check({force:true});
})

Cypress.Commands.add("enterTextCSS", (element, value) => {
  cy.get(element).type(value);
})

Cypress.Commands.add("clickButtonCSS", (element) => {
  cy.get(element).click();
})
Cypress.Commands.add("elementToVisibleWithTimeout", (element, _timeout) => {
  if (element.includes("//")) {
    cy.xpath(element, {timeout: _timeout}).should('be.visible');
  }
  else {
    cy.get(element, {timeout: _timeout}).should('be.visible');
  }
})

Cypress.Commands.add("modelToHiddenWithTimeout", (element, _timeout) => {
  if (element.includes("//")) {
    cy.xpath(element, {timeout: _timeout}).should('be.hidden');
  }
  else {
    cy.get(element, {timeout: _timeout}).should('be.hidden');
  }
})
Cypress.Commands.add("CheckAndClickWithoutDOM", (dialog, element) => {

  cy.get('body').then(($body) => {
    if ($body.find(dialog).length > 0) {
      if (element.includes("//")) {
        cy.xpath(element).click({ force: true })
      }
      else {
        cy.get(element).click({ force: true })
      }
    }
  })
});



Cypress.Commands.add("notBeNull",(element)=>{
  if(element.includes("//")){
    cy.xpath(element).should('not.be.null')
  }
  else{
    cy.get(element).should('not.be.null')
  }
})



