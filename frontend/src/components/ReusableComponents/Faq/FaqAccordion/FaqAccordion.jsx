import React from "react";
import AccordionBox from "./AccordionBox/AccordionBox";

const FaqAccordion = () => {
  return (
    // <div className="flex-1 divide-y-2 divide-solid divide-[#012054]">
    //   <AccordionBox />
    //   <AccordionBox />
    //   <AccordionBox />
    //   <AccordionBox />
    // </div>

    <div
      className="accordion accordion-flush flex-1 divide-y-2 divide-solid divide-[#012054]"
      id="accordionFlushExample"
    >
      <AccordionBox
        title="1. Is there a video length or file size limit?"
        headingId="flush-headingOne"
        collapseId="flush-collapseOne"
      >
        Placeholder content for this accordion, which is intended to demonstrate
        the <code>.accordion-flush</code> className. This is the first item's
        accordion body.
      </AccordionBox>
      <AccordionBox
        title="2. What languages does Poshtranslate support ?"
        headingId="flush-headingTwo"
        collapseId="flush-collapseTwo"
      >
        Placeholder content for this accordion, which is intended to demonstrate
        the <code>.accordion-flush</code> className. This is the first item's
        accordion body.
      </AccordionBox>
      <AccordionBox
        title="3. Can I try Poshtranslate for free?"
        headingId="flush-headingThree"
        collapseId="flush-collapseThree"
      >
Yes, we have up to 3 files free trial 
    </AccordionBox>
      <AccordionBox
        title="4. Can I share the files with my colleagues?"
        headingId="flush-headingFour"
        collapseId="flush-collapseFour"
      >
       Yes, you can export the document and share it with your colleagues.
      </AccordionBox>
    </div>
  );
};

export default FaqAccordion;
