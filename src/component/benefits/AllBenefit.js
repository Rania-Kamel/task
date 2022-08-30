import React from "react";
import "./allBenefit.css";
import benefit1 from "../../assets/benefit1.png";
import OneBenefit from './OneBenefit'

function AllBenefit() {
  return (
    <div className="allBenefits">
      <OneBenefit
        src={benefit1}
        title="Community Events"
        description="Allowing cost savings and convenience through the use of common infrastructures."
      />
      <OneBenefit
        src={benefit1}
        title="Community Events"
        description="Allowing cost savings and convenience through the use of common infrastructures."
      />
      <OneBenefit
        src={benefit1}
        title="Community Events"
        description="Allowing cost savings and convenience through the use of common infrastructures."
      />
      <OneBenefit
        src={benefit1}
        title="Community Events"
        description="Allowing cost savings and convenience through the use of common infrastructures."
      />
      <OneBenefit
        src={benefit1}
        title="Community Events"
        description="Allowing cost savings and convenience through the use of common infrastructures."
      />
    </div>
  );
}

export default AllBenefit;
