

/*Material and Width*/

SELECT Lanyards.material, Width.width FROM `Lanyards` INNER JOIN Width ON Lanyards.idLanyard  = Width.idLanyard


/*Material, Width and SidePrinted*/

SELECT Lanyards.material, Width.width, SidePrinted.noSides FROM Lanyards INNER JOIN Width ON Lanyards.idLanyard = Width.idLanyard  INNER JOIN `SidePrinted` ON Width.idWidth = SidePrinted.idWidth;


/*Material, Width, SidePrinted and noColours*/

SELECT Lanyards.material, Width.width, SidePrinted.noSides, noColours.option
FROM Lanyards
INNER JOIN Width
ON Lanyards.idLanyard = Width.idLanyard
INNER JOIN SidePrinted
ON Width.idWidth = SidePrinted.idWidth
INNER JOIN noColours
ON SidePrinted.idSidePrinted = noColours.idSidePrinted
ORDER BY Lanyards.material, Width.width, SidePrinted.noSides, noColours.option;


/*Material, Width, SidePrinted, noColours and Amount*/

SELECT Lanyards.material, Width.width, SidePrinted.noSides, noColours.option, Amount.`min-amount`, Amount.`max-amount`, Amount.`price`
FROM Lanyards
INNER JOIN Width
ON Lanyards.idLanyard = Width.idLanyard
INNER JOIN SidePrinted
ON Width.idWidth = SidePrinted.idWidth
INNER JOIN noColours
ON SidePrinted.idSidePrinted = noColours.idSidePrinted
INNER JOIN Amount
ON noColours.idNoColour = Amount.idNoColour
ORDER BY Lanyards.material, Width.width, SidePrinted.noSides, noColours.option, Amount.`min-amount`, Amount.`max-amount`;
