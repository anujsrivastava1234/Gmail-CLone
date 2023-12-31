import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import "./EmailList.css";
import { Checkbox, IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React from "react";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import SettingsIcon from "@mui/icons-material/Settings";
import Search from "@mui/icons-material/Search";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import InboxIcon from "@mui/icons-material/Inbox";
import Section from "./Section";
import EmailRow from "./EmailRow";

function EmailList() {
  return (
    <div className="emailList">
      <div className="emailList__setting">
        <div className="emailList__settingLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList__settingRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        <Section
          Icon={InboxIcon}
          title="Primary"
          color="#1A73E8"
          selected={true}
        />
        <Section
          Icon={PeopleIcon}
          title="Social"
          color="green"
          selected={false}
        />
        <Section
          Icon={LocalOfferIcon}
          title="Promotions"
          color="red"
          selected={false}
        />
      </div>
      <div className="emailList__list">
        <EmailRow
          title="Twitch"
          subject="Hey fellow Streamer"
          description="This is a test"
          time="10:00"
        />
      </div>
    </div>
  );
}

export default EmailList;
