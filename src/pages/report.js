import React from "react"
import Layout from "../layout/layout"
import Container from "../layout/container"

import Caption from "../components/typography/caption"
import Summary from "../components/typography/summary"

import TextGroup from "../components/form-groups/text"
import EmailGroup from "../components/form-groups/email"
import SelectGroup from "../components/form-groups/select"
import DateGroup from "../components/form-groups/date"
import MultiLineGroup from "../components/form-groups/multiline"
import NumberGroup from "../components/form-groups/number"
import FileGroup from "../components/form-groups/file"

import ArrowIcon from "../components/icons/arrow-icon"

import Button from "../components/controls/button"
import Divider from "../components/typography/divider"

const offence = {
  theft: "Theft",
  manslaughter: "Manslaughter",
}

const boolean = {
  no: "No",
  yes: "Yes",
}

const sex = {
  M: "M",
  F: "F",
}

const relationship = {
  brother: "Brother",
  sister: "Sister",
  son: "Son",
  daughter: "Daughter",
  father: "Father",
  mother: "Mother",
  colleague: "Colleague",
  concerned: "Concerned Citizen",
  son_in_law: "Son-In-Law",
  daughter_in_law: "Daughter-In-Law",
  father_in_law: "Father-In-Law",
  mother_in_law: "Mother-In-Law",
  brother_in_law: "Brother-In-Law",
  sister_in_law: "Sister-In-Law",
  uncle: "Uncle",
  aunt: "Aunty",
  nephew: "Nephew",
  niece: "Niece",
}

const states = {
  Lagos: "Lagos",
  Abuja: "Abuja",
  Abia: "Abia",
}

const ReportPage = () => {
  return (
    <Layout>
      <Container animation="theme-animate">
        <Caption>Report Crime</Caption>
        <Summary>
          Get justice for your family today, report the crime...
        </Summary>
        <div className="flex flex-wrap flex-col sm:flex-row -mx-4">
          <Divider>Victim's Details</Divider>

          <div className="w-full sm:w-1/2 lg:w-1/4 p-4 sm:py-4 xxl:py-6">
            <TextGroup id="victim-name" name="Name" placeholder="Jimoh Isiaq" />
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 p-4 sm:py-4 xxl:py-6">
            <FileGroup
              id="victim-photo"
              name="Photo"
              placeholder="Upload Photo"
            />
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 p-4 sm:py-4 xxl:py-6">
            <SelectGroup id="victim-sex" name="Sex" data={sex} />
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 p-4 sm:py-4 xxl:py-6">
            <NumberGroup id="victim-age" name="Age" placeholder="28" />
          </div>

          <Divider>Offence Details</Divider>

          <div className="w-full sm:w-1/2 lg:w-1/2 p-4 sm:py-4 xxl:py-6">
            <TextGroup
              id="offender"
              name="Offender"
              placeholder="CSP James Nwafor"
            />
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/2 p-4 sm:py-4 xxl:py-6">
            <SelectGroup
              id="offence"
              name="Crime(s) Committed by Offender"
              data={offence}
            />
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3 p-4 sm:py-4 xxl:py-6">
            <TextGroup
              id="offence-place"
              name="Where (Place of Incidence)"
              placeholder="No. 1 Bode Thomas, Surulere, Lagos"
            />
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3 p-4 sm:py-4 xxl:py-6">
            <SelectGroup
              id="offence-state"
              name="State of Incidence"
              data={states}
            />
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3 p-4 sm:py-4 xxl:py-6">
            <DateGroup id="offence-date" name="When (Date of Incidence)" />
          </div>

          <div className="w-full p-4 sm:py-4 xxl:py-6">
            <MultiLineGroup
              id="description"
              name="Describe Offence"
              placeholder="Please describe offence in detail"
            />
          </div>
          <div className="w-full flex flex-row">
            <div className="w-3/5 lg:w-1/4 p-4 sm:py-4 xxl:py-6">
              <FileGroup
                id="evidence"
                name="Attach Evidence"
                placeholder="photo1.jpg"
              />
            </div>

            <div className="w-2/5 lg:w-1/4 p-4 sm:py-4 xxl:py-6">
              <div className="font-medium">&nbsp;</div>
              <button
                id="attach"
                className="w-full bg-theme block rounded-lg mt-3 px-6 py-4 text-white text-left tracking-tighter font-medium"
              >
                <span className="hidden sm:inline">Add More Evidence</span>
                <span className="sm:hidden">Add</span>
                <div className="float-right">
                  <ArrowIcon />
                </div>
              </button>
            </div>
          </div>

          <Divider>Report Details</Divider>

          <div className="w-full sm:w-1/2 lg:w-1/4 p-4 sm:py-4 xxl:py-6">
            <SelectGroup
              id="reported"
              name="Was this offence reported?"
              data={boolean}
            />
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 p-4 sm:py-4 xxl:py-6">
            <TextGroup
              id="reported-who"
              name="If Yes, who was it reported to?"
              placeholder="CSP Idris Abubakar"
            />
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 p-4 sm:py-4 xxl:py-6">
            <DateGroup
              id="reported-date"
              name="If Yes, when was it reported?"
            />
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 p-4 sm:py-4 xxl:py-6">
            <TextGroup
              id="reported-where"
              name="If Yes, where was it reported?"
              placeholder="Police Headquarters, Abuja"
            />
          </div>

          <Divider>Personal Details</Divider>

          <div className="w-full sm:w-1/2 lg:w-1/3 p-4 sm:py-4 xxl:py-6">
            <TextGroup id="name" name="Name" placeholder="Francis Adeboye" />
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3 p-4 sm:py-4 xxl:py-6">
            <TextGroup id="telephone" name="Telephone" placeholder="+234" />
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3 p-4 sm:py-4 xxl:py-6">
            <EmailGroup
              id="email"
              name="E-mail Address"
              placeholder="you@email.com"
            />
          </div>

          <div className="w-full"></div>

          <div className="w-full sm:w-1/2 lg:w-1/2 p-4 sm:py-4 xxl:py-6">
            <SelectGroup
              id="certify"
              name="Do you certify that the information you have presented is correct?"
              data={boolean}
            />
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/2 p-4 sm:py-4 xxl:py-6">
            <SelectGroup
              id="relationship"
              name="Victim's Relationship to you"
              data={relationship}
            />
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 p-4 sm:py-4">
            <Button>Report Crime</Button>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default ReportPage
