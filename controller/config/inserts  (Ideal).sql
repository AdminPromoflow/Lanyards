

/*IDEAL SITUATION = */



INSERT INTO `Lanyards` (`idLanyard`, `material`, `linkImg`, `description`) VALUES
  (NULL, 'Tubular', 'views/assets/img/global/customize-lanyard/sections/material/Material-2-Tabular.jpg', 'Made from tube-stitched polyester, these lanyards offer a comfortable, shoelace-like texture, perfect for economical, everyday use.'),

  (NULL, 'Dye Sub polyester', 'views/assets/img/global/customize-lanyard/sections/material/Material-4-Dye-sublimation.jpg', 'High-resolution, color-rich designs achieved through dye sublimation on smooth polyester, blending quality and durability.'),

  (NULL, 'Ribbed Polyester', 'views/assets/img/global/customize-lanyard/sections/material/Material-1-Flat-Polyester.jpg', 'Durable, textured fabric known for its resilience and vivid color retention, ideal for frequent use and detailed designs.');

/*One end - tow ends*/
/*Lanyard type*/

INSERT INTO `LanyardTypes` (`idLanayardType`, `type`, `price`, `idLanyard`) VALUES
(1, 'two-end', 2, 5),
(2, 'two-end', 2, 1),
(3, 'one-end', 0, 1),
(4, 'two-end', 2, 2),
(5, 'one-end', 0, 2),
(6, 'two-end', 2, 3),
(7, 'one-end', 0, 3),
(8, 'two-end', 2, 4),
(9, 'one-end', 0, 4),
(10, 'one-end', 0, 5);



/*Width*/
INSERT INTO `Width`( `width`, `idLanyard`) SELECT '10mm' , `idLanyard` FROM `Lanyards` 0;
INSERT INTO `Width`( `width`, `idLanyard`) SELECT '15mm' , `idLanyard` FROM `Lanyards`;
INSERT INTO `Width`( `width`, `idLanyard`) SELECT '20mm' , `idLanyard` FROM `Lanyards`;
INSERT INTO `Width`( `width`, `idLanyard`) SELECT '25mm' , `idLanyard` FROM `Lanyards`;
INSERT INTO `Width`( `width`, `idLanyard`) SELECT '30mm' , `idLanyard` FROM `Lanyards`;



/*Side-printed*/

/*Tubular*/
INSERT INTO `SidePrinted`( `noSides`, `idWidth`) SELECT 'one-side' , `idWidth` FROM `Width` WHERE `idLanyard` IN (SELECT `idLanyard` FROM `Lanyards` WHERE `material`= "Tubular");
INSERT INTO `SidePrinted`( `noSides`, `idWidth`) SELECT 'two-side' , `idWidth` FROM `Width` WHERE `idLanyard` IN (SELECT `idLanyard` FROM `Lanyards` WHERE `material`= "Tubular");

/*Dye sub Polyester  ->  two-sides*/
INSERT INTO `SidePrinted`( `noSides`, `idWidth`) SELECT 'two-side' , `idWidth` FROM `Width` WHERE `idLanyard` IN (SELECT `idLanyard` FROM `Lanyards` WHERE `material`= "Dye Sub polyester");

/*Ribbed Polyester    one and two-sides*/
INSERT INTO `SidePrinted`( `noSides`, `idWidth`) SELECT 'one-side' , `idWidth` FROM `Width` WHERE `idLanyard` IN (SELECT `idLanyard` FROM `Lanyards` WHERE `material`= "Ribbed Polyester");
INSERT INTO `SidePrinted`( `noSides`, `idWidth`) SELECT 'two-side' , `idWidth` FROM `Width` WHERE `idLanyard` IN (SELECT `idLanyard` FROM `Lanyards` WHERE `material`= "Ribbed Polyester");


/*Dye Sub RPET  ->  two-sides*/
INSERT INTO `SidePrinted`( `noSides`, `idWidth`) SELECT 'two-side' , `idWidth` FROM `Width` WHERE `idLanyard` IN (SELECT `idLanyard` FROM `Lanyards` WHERE `material`= "Dye Sub RPET");


/*Bamboo  ->  one-sides*/
INSERT INTO `SidePrinted`( `noSides`, `idWidth`) SELECT 'one-side' , `idWidth` FROM `Width` WHERE `idLanyard` IN (SELECT `idLanyard` FROM `Lanyards` WHERE `material`= "Bamboo");




/*No-colours*/

  /*Tubular 1 */

    /*Tubular 1  one side - one colour*/

INSERT INTO `noColours`(`option`, `idSidePrinted`) SELECT 'one-colour', `idSidePrinted` FROM `SidePrinted`
WHERE `idWidth` IN (SELECT `idWidth` FROM `Width` WHERE `idLanyard`IN (SELECT `idLanyard` FROM `Lanyards` WHERE `material`= 'Tubular' ) ) AND `noSides` = 'one-side';

    /*Tubular 1  one side - two colour*/

INSERT INTO `noColours`(`option`, `idSidePrinted`) SELECT 'two-colour', `idSidePrinted` FROM `SidePrinted`
WHERE `idWidth` IN (SELECT `idWidth` FROM `Width` WHERE `idLanyard`IN (SELECT `idLanyard` FROM `Lanyards` WHERE `material`= 'Tubular' ) ) AND `noSides` = 'one-side';

    /*Tubular 1  two side - one colour*/

INSERT INTO `noColours`(`option`, `idSidePrinted`) SELECT 'one-colour', `idSidePrinted` FROM `SidePrinted`
WHERE `idWidth` IN (SELECT `idWidth` FROM `Width` WHERE `idLanyard`IN (SELECT `idLanyard` FROM `Lanyards` WHERE `material`= 'Tubular' ) ) AND `noSides` = 'two-side';

    /*Tubular 1  two side - two colour*/

INSERT INTO `noColours`(`option`, `idSidePrinted`) SELECT 'two-colour', `idSidePrinted` FROM `SidePrinted`
WHERE `idWidth` IN (SELECT `idWidth` FROM `Width` WHERE `idLanyard`IN (SELECT `idLanyard` FROM `Lanyards` WHERE `material`= 'Tubular' ) ) AND `noSides` = 'twp-side';



/*Dye Sub polyester 1 two side - full colour*/

INSERT INTO `noColours`(`option`, `idSidePrinted`) SELECT 'full-colour', `idSidePrinted` FROM `SidePrinted`
WHERE `idWidth` IN (SELECT `idWidth` FROM `Width` WHERE `idLanyard`IN (SELECT `idLanyard` FROM `Lanyards` WHERE `material`= 'Dye Sub polyester' ) ) AND `noSides` = 'two-side';



/*Polyester  */

  /*Polyester   one side - one colour*/

INSERT INTO `noColours`(`option`, `idSidePrinted`) SELECT 'one-colour', `idSidePrinted` FROM `SidePrinted`
WHERE `idWidth` IN (SELECT `idWidth` FROM `Width` WHERE `idLanyard`IN (SELECT `idLanyard` FROM `Lanyards` WHERE `material`= 'Ribbed Polyester' ) ) AND `noSides` = 'one-side';

  /*Polyester   one side - two colour*/

INSERT INTO `noColours`(`option`, `idSidePrinted`) SELECT 'two-colour', `idSidePrinted` FROM `SidePrinted`
WHERE `idWidth` IN (SELECT `idWidth` FROM `Width` WHERE `idLanyard`IN (SELECT `idLanyard` FROM `Lanyards` WHERE `material`= 'Ribbed Polyester' ) ) AND `noSides` = 'one-side';

  /*Polyester   two side - one colour*/

INSERT INTO `noColours`(`option`, `idSidePrinted`) SELECT 'one-colour', `idSidePrinted` FROM `SidePrinted`
WHERE `idWidth` IN (SELECT `idWidth` FROM `Width` WHERE `idLanyard`IN (SELECT `idLanyard` FROM `Lanyards` WHERE `material`= 'Ribbed Polyester' ) ) AND `noSides` = 'two-side';

  /*Polyester  two side - two colour*/

INSERT INTO `noColours`(`option`, `idSidePrinted`) SELECT 'two-colour', `idSidePrinted` FROM `SidePrinted`
WHERE `idWidth` IN (SELECT `idWidth` FROM `Width` WHERE `idLanyard`IN (SELECT `idLanyard` FROM `Lanyards` WHERE `material`= 'Ribbed Polyester' ) ) AND `noSides` = 'twp-side';



/*Dye Sub RPET two side - full colour*/

INSERT INTO `noColours`(`option`, `idSidePrinted`) SELECT 'full-colour', `idSidePrinted` FROM `SidePrinted`
WHERE `idWidth` IN (SELECT `idWidth` FROM `Width` WHERE `idLanyard`IN (SELECT `idLanyard` FROM `Lanyards` WHERE `material`= 'Dye Sub RPET' ) ) AND `noSides` = 'two-side';




/*Bamboo  */

  /*Bamboo   one side - one colour*/

INSERT INTO `noColours`(`option`, `idSidePrinted`) SELECT 'one-colour', `idSidePrinted` FROM `SidePrinted`
WHERE `idWidth` IN (SELECT `idWidth` FROM `Width` WHERE `idLanyard`IN (SELECT `idLanyard` FROM `Lanyards` WHERE `material`= 'Bamboo' ) ) AND `noSides` = 'one-side';

  /*Bamboo   one side - two colour*/

INSERT INTO `noColours`(`option`, `idSidePrinted`) SELECT 'two-colour', `idSidePrinted` FROM `SidePrinted`
WHERE `idWidth` IN (SELECT `idWidth` FROM `Width` WHERE `idLanyard`IN (SELECT `idLanyard` FROM `Lanyards` WHERE `material`= 'Bamboo' ) ) AND `noSides` = 'one-side';






/**/
