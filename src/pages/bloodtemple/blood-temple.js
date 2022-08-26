import React, { useEffect } from 'react';
import './bloodTemple.css';
import { Link, useLocation } from 'react-router-dom';
import $ from 'jquery';
import BloodCharacters from './blood-characters';
import BloodCharacterCollection from './blood-character-collection';

function BloodTemple() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    $('button.go_marketplace').click(function () {
      $('.modal-open').css('overflow', 'overlay');
      $('.modal-backdrop.fade.show').css('display', 'none');
    });
  }, []);

  return (
    <div className="top_nft pt-5 character_details chara_profile_details blood_template_page">
      <BloodCharacters />
      <BloodCharacterCollection />
    </div>
  );
}

export default BloodTemple;
