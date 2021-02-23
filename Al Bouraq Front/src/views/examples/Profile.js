
import React, { useEffect, useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  Table,
  Media,
  Badge,
  UncontrolledTooltip,
  Progress,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";


const Profile = (props) => {
 // const [activeNav, setActiveNav] = useState(1);
  const [family, setFamily] = useState([]);

  const getFamily= async()=>{
    const id=props.match.params.id;
    const getAllUrl=`http://localhost:8000/api/families-major/${id}`;
    const response= await fetch(getAllUrl);
    const result= await response.json();
    console.log(result.data);
    setFamily(result.data);

  }

  useEffect(()=>{
    getFamily()
    //console.log(family) 
  },[]);

  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
      {family.map(f=>(
        <div key={f.id}>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={
                          require("../../assets/img/theme/team-4-800x800.jpg")
                            .default
                        }
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between">
                  <Button
                    className="float-right"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Upload New Photo
                  </Button>
                </div>
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <Row>
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-md-2">
                    </div>
                  </div>
                </Row>
                <div className="text-center">
                  <h2>
                    {f.families_exclusive_info.wife_name} |  {f.families_type.family_type}
                  </h2>
                  <h2>
                    {f.code} | {f.area}
                  </h2>
                  <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                    Assigned Interviewer
                  </div>
                  <div>
                    <i className="ni education_hat mr-2" />
                    {f.interviewer}
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">My account</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Settings
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    User information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                     
                        <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name">
                            Family Name
                          </label>
                          <Input
                            className="form-control-alternative"
                            value={f.family_name}
                            id="input-first-name"
                            placeholder="empty"
                            type="text"
                            readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="area"
                          >
                            Family Code
                          </label>
                          <Input
                            className="form-control-alternative"
                            value={f.code}
                            id="area"
                            placeholder="empty"
                            type="text"
                            readOnly
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="code"
                          >
                            Assigned Doctor
                          </label>
                          <Input
                            className="form-control-alternative"
                            value={f.doctor_name}
                            id="code"
                            placeholder="empty"
                            type="text"
                            readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Family Type
                          </label>
                          <Input
                          className="form-control-alternative"
                            value={f.families_type.family_type}
                            id="doctor_name"
                            placeholder="empty"
                            type="text"
                            readOnly
                          />
                        </FormGroup>
                      </Col>
                    </Row>        
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="code"
                          >
                            Survey Date
                          </label>
                          <Input
                            className="form-control-alternative"
                            value={f.survey_date}
                            id="code"
                            placeholder="empty"
                            type="text"
                            readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Phone
                          </label>
                          <Input
                          className="form-control-alternative"
                            value={f.phone_number}
                            id="doctor_name"
                            placeholder="empty"
                            type="text"
                            readOnly
                          />
                        </FormGroup>
                      </Col>
                    </Row>                
                  </div>
                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    Exclusive WIfe Additional Information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            Date of Birth
                          </label>
                          <Input
                       className="form-control-alternative"
                       value={f.wife_date_of_birth}
                       id="wife_date_of_birth"
                       placeholder="empty"
                       type="text"
                       readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            In need of work?
                          </label>
                          <Input
                       className="form-control-alternative"
                       value={f.families_exclusive_info.wife_work_need}
                       id="wife_work_need"
                       placeholder="empty"
                       type="text"
                       readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Work Need
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={f.families_exclusive_info.wife_work_nee_desc}
                              id="husband_nationality"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            Education Level
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={f.families_exclusive_info.wife_education_level}
                              id="interviewer"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Clothes
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={f.families_exclusive_info.wife_clothes_type}
                              id="living_with"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Clothes Size
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={f.families_exclusive_info.wife_clothes_size}
                              id="wife_clothes_size"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Shoe Size
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={f.families_exclusive_info.wife_shoe_size}
                              id="medication_name"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                </Row>
                  </div>




                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    Lebanese Wife Additional Details
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            Has Car?
                          </label>
                          <Input
                       className="form-control-alternative"
                       value={f.lebanese_families.existing_car}
                       id="wife_date_of_birth"
                       placeholder="empty"
                       type="text"
                       readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Car Owner
                          </label>
                          <Input
                       className="form-control-alternative"
                       value={f.lebanese_families.car_owner}
                       id="wife_work_need"
                       placeholder="empty"
                       type="text"
                       readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Car Make
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={f.lebanese_families.car_desc}
                              id="husband_nationality"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            Has Gold?
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={f.lebanese_families.wife_gold_assets}
                              id="interviewer"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            Has Gold?
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={f.lebanese_families.gold_retain_desc}
                              id="interviewer"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Gold Assets Description
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={f.lebanese_families.wife_gold_assets_desc}
                              id="living_with"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Gold Quantity
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={f.lebanese_families.wife_gold_quantity}
                              id="wife_clothes_size"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Other Assets 
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={f.lebanese_families.wife_other_assets}
                              id="medication_name"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Other Assets Value
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={f.lebanese_families.wife_other_assets_value}
                              id="medication_name"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                </Row>
                </div>

{/* syrian wife info */}
                <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    Syrian Wife Additional Details
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            UN Number
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={f.syrian_families.wife_un_number}
                              id="medication_name"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                </Row>
                    <Row>
                    <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Has debt?
                          </label>
                          <Input
                       className="form-control-alternative"
                       value={f.syrian_families.family_debt}
                       id="wife_work_need"
                       placeholder="empty"
                       type="text"
                       readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            Debt Reason
                          </label>
                          <Input
                       className="form-control-alternative"
                       value={f.syrian_families.family_debt_desc}
                       id="wife_date_of_birth"
                       placeholder="empty"
                       type="text"
                       readOnly
                          />
                        </FormGroup>
                      </Col>                     
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Debt Amount
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={f.syrian_families.family_debt_amount}
                              id="husband_nationality"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                           In Lebanon Since?
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={f.syrian_families.wife_in_lebanon_since}
                              id="interviewer"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            Sponsored Since
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={f.syrian_families.sponsored_since}
                              id="interviewer"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Applied for Immigration?
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={f.syrian_families.wife_migration_request}
                              id="living_with"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Immigration form
                          </label>
                          <Input
                              className="form-control-alternative"
                              // value={f.syrian_families.wife_migration_request_image}
                              id="wife_clothes_size"
                              placeholder="empty"
                              type="file"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                </div>


{/* exceptional family wife info */}
<hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    Exceptional Family Wife Additional Details
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            First Name
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={f.exceptional_families.wife_name}
                              id="medication_name"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Middle Name
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={f.exceptional_families.wife_father_name}
                              id="medication_name"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Last name
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={f.exceptional_families.wife_sur_name}
                              id="medication_name"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                </Row>
                    <Row>
                    <Col md="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Number of Children
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={f.exceptional_families.children_number}
                              id="medication_name"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            Number of smokers
                          </label>
                          <Input
                       className="form-control-alternative"
                       value={f.exceptional_families.smokers_in_house}
                       id="wife_date_of_birth"
                       placeholder="empty"
                       type="text"
                       readOnly
                          />
                        </FormGroup>
                      </Col>                                    
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                           Incoming aid
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={f.exceptional_families.other_aid}
                              id="interviewer"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            Description
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={f.exceptional_families.other_aid_description}
                              id="interviewer"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Additional Comments
                          </label>
                            <Input
                              className="form-control-alternative"
                              placeholder="A few words about you ..."
                              rows="6"
                              value={f.exceptional_families.family_comment}
                              type="textarea"
                            />
                    </FormGroup>
                      </Col>
                    </Row>
                </div>








                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    House information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      {f.house_types.map(type => f.families_type.family_type =="Syrian" ? 
                        <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            House Ownership
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={type.house_type_name}
                              id="medication_price"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                      :
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                             Number of Residents
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={f.number_of_residents}
                              id="number_of_residents"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                        )}                      
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                             Number of Residents
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={f.number_of_residents}
                              id="number_of_residents"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Living With
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={f.living_with}
                              id="phone_number"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            Sick people in house?
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={f.existing_medical_conditions}
                              id="wife_date_of_birth"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Medical Condition name
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={f.medical_condition_name}
                              id="wife_income"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Who is sick?
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={f.health_risk_persons}
                              id="wife_marital_status"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Medications
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={f.medication_name}
                              id="wife_nationality"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Medication Price
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={f.medication_price}
                              id="wife_profession"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      {f.house_needs.map((need, key) => 
                          <Col md="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Need {key+1}
                            </label>
                            <Input
                                className="form-control-alternative"
                                value={need.house_need_name}
                                id="wife_profession"
                                placeholder="empty"
                                type="text"
                                readOnly
                            />
                          </FormGroup>
                        </Col>
                        )}

                    </Row>
                    <Row>
                    <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Additional Comments
                          </label>
                            <Input
                              className="form-control-alternative"
                              placeholder="A few words about you ..."
                              rows="6"
                              value={f.families_exclusive_info.family_comment}
                              type="textarea"
                            />
                    </FormGroup>
                      </Col>
                    </Row>
                  </div>


                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    House Exclusive Information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                        <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            House Condition
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={f.families_exclusive_info.house_condition}
                              id="medication_price"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>                   
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                             House Value
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={f.families_exclusive_info.house_value}
                              id="number_of_residents"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Rent Contributors
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={f.families_exclusive_info.rent_contributor}
                              id="phone_number"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col md="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Pending Bills
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={f.families_exclusive_info.pending_bills}
                              id="wife_profession"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            Electric Bill
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={f.families_exclusive_info.electricity_bill}
                              id="wife_date_of_birth"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Water
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={f.families_exclusive_info.water_bill}
                              id="wife_income"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Internet
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={f.families_exclusive_info.internet_bill}
                              id="wife_marital_status"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col md="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Generator
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={f.families_exclusive_info.generator_bill}
                              id="wife_nationality"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Distribution Point
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={f.families_exclusive_info.distribution_point}
                              id="wife_profession"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Smokers?
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={f.families_exclusive_info.smokers_in_house}
                              id="wife_profession"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Medication Sponsor
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={f.families_exclusive_info.medication_sponsor}
                              id="wife_profession"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                      </Row>
                      <Row>
                      <Col md="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Medication Sponsor
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={f.families_exclusive_info.medication_sponsor_amount}
                              id="wife_profession"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                    <Col md="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Medication Price
                          </label>
                          <Input
                              className="form-control-alternative"
                              value={f.medication_price}
                              id="wife_profession"
                              placeholder="empty"
                              type="text"
                              readOnly
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>



                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Children</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Family Name</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Date of Birth</th>
                    <th scope="col">Status</th>
                    <th scope="col">Profession</th>
                    <th scope="col">Education Aid</th>
                    <th scope="col">School Fees</th>
                    <th scope="col">School Name</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {f.children_info.map(item =>
                  <>
                    <tr key={item.id}>
                    <td scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="align-items-center">
                          {item.child_name}
                          </span>
                        </Media>
                      </Media>
                    </td>
                    <td>{item.family_name}</td>
                    <td>
                    <div className="align-items-center">
                        {item.child_gender}
                      </div>
                    </td>
                    <td>
                      <div className="align-items-center">
                      {item.child_date_of_birth}
                      </div>
                    </td>
                    <td>
                        <div className="align-items-center">
                      {item.child_status}
                      </div>
                    </td>
                    <td>
                        <div className="align-items-center">
                      {item.child_profession}
                      </div>
                    </td>
                    <td>
                        <div className="align-items-center">
                      {item.educational_aid}
                      </div>
                    </td>
                    <td>
                        <div className="align-items-center">
                      {item.school_fees}
                      </div>
                    </td>
                    <td>
                        <div className="align-items-center">
                      {item.school_name}
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Another action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Something else here
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  </>
                    )}
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
        <Row>
            <Col lg="7" md="10">
            <hr className="my-4" />
                  {/* Description */}
                  <h6 className="heading-small text-muted mb-4">Additional Notes</h6>
                  <div className="pl-lg-4">
                    <FormGroup>
                      <Input
                        className="form-control-alternative"
                        placeholder="A few words about you ..."
                        rows="4"
                        defaultValue="A beautiful Dashboard for Bootstrap 4. It is Free and
                        Open Source."
                        type="textarea"
                      />
                    </FormGroup>
                  </div>
            </Col>
          </Row>
          <Row>
            <Col lg="7" md="10">
              <Button
                color="info"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                Save
              </Button>
            </Col>
          </Row>
          </div>
          ))}
      </Container>
      
    </>
  );
};

export default Profile;
