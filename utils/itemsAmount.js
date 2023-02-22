const mosjid_donation = "Mosjid Donation";
const zakat_al_fitr = "Zakat Al Fitr";
const biriyani_fund = "Biriyani Fund";
const madrasha_donation = "Madrasha Donation";
const toush_tap_go = "Touch Tap Go";

const itemsAmount = (arr) => {
  let mosjidDonation = 0,
    mosjidDonationCount = 0,
    zakatAlFitr = 0,
    zakatAlFitrCount = 0,
    biriyaniFund = 0,
    biriyaniFundCount = 0,
    madrashaDonation = 0,
    madrashaDonationCount = 0,
    touchTapGo = 0,
    touchTapGoCount = 0;

  arr.forEach((element) => {
    element.items.map((item) => {
      if (item.name.toLowerCase() === mosjid_donation.toLowerCase()) {
        mosjidDonationCount++;
        mosjidDonation += item.price;
      } else if (item.name.toLowerCase() === zakat_al_fitr.toLowerCase()) {
        zakatAlFitrCount++;
        zakatAlFitr += item.price;
      } else if (item.name.toLowerCase() === biriyani_fund.toLowerCase()) {
        biriyaniFundCount++;
        biriyaniFund += item.price;
      } else if (item.name.toLowerCase() === madrasha_donation.toLowerCase()) {
        madrashaDonationCount++;
        madrashaDonation += item.price;
      } else if (item.name.toLowerCase() === toush_tap_go.toLowerCase()) {
        touchTapGoCount++;
        touchTapGo += item.price;
      }
    });
  });

  return [
    {
      name: "Mosjid Donation",
      amount: mosjidDonation,
      transactionNo: mosjidDonationCount,
    },
    {
      name: "Zakat Al Fitr",
      amount: zakatAlFitr,
      transactionNo: zakatAlFitrCount,
    },
    {
      name: "Biriyani Fund",
      amount: biriyaniFund,
      transactionNo: biriyaniFundCount,
    },
    {
      name: "Madrasha Donation",
      amount: madrashaDonation,
      transactionNo: madrashaDonationCount,
    },
    {
      name: "Touch Tap Go",
      amount: touchTapGo,
      transactionNo: touchTapGoCount,
    },
  ];
};

export default itemsAmount;
