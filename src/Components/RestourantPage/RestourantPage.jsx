import React from "react";
import { Container } from "../Container/Container";
import { Search } from "../search/Search";
import { restaurants } from "../info";
import { RestourantCard } from "../restourant-card/restourant-card";
import {RestourantMainPhoto} from "./RestourantMainPhoto/RestourantMainPhoto";
import {InfoMenu} from '../infoMenu'

export function RestourantPage() {
  return (
    <div>
        <RestourantMainPhoto />

        <Container>
      <h1>якийсь ресторан</h1>
      <h1>якийсь ресторан</h1>
      <h1>якийсь ресторан</h1>
      <h1>якийсь ресторан</h1>
      <h2>якийсь ресторан</h2>
      <h2>якийсь ресторан</h2>
        </Container>
    </div>
  );
}
