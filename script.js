function calculate() {
  const tileData = {
    "12x12": { tons: 0.00154321, sfPerTon: 638 },
    "12x12r": { tons: 0.001873898, sfPerTon: 525 },
    "12x24": { tons: 0.003251764, sfPerTon: 602 },
    "12x24r": { tons: 0.004078483, sfPerTon: 481 },
    "18x18": { tons: 0.003417108, sfPerTon: 630 },
    "24x24": { tons: 0.008377425, sfPerTon: 473 },
    "15x30": { tons: 0.006613757, sfPerTon: 497 }
  };

  const size = document.getElementById("tileSize").value;
  const tonnage = parseFloat(document.getElementById("tonnage").value);

  if (isNaN(tonnage)) {
    document.getElementById("results").innerHTML = "Please enter a valid tonnage.";
    return;
  }

  const tile = tileData[size];
  const totalPieces = tonnage / tile.tons;
  const totalSqFt = tonnage * tile.sfPerTon;

  document.getElementById("results").innerHTML = `
    <p><strong>Tile Size:</strong> ${size}</p>
    <p><strong>Estimated Pieces:</strong> ${Math.floor(totalPieces)}</p>
    <p><strong>Estimated Square Footage:</strong> ${Math.floor(totalSqFt)} SF</p>
  `;
}
