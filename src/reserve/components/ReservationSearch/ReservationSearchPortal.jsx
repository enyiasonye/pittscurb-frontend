import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import {
  SearchControls
} from './ReservationSearchPortalStyles';

import Autocomplete from '../ReservationPortal/Autocomplete';
import TimeSelect from '../ReservationPortal/TimeSelect';

import { getMapCoords } from '../../utils/geoUtil';
import { mapSources, zoom } from '../../../common/constants/map'
import {
  Map,
  Polygon,
  TileLayer,
} from 'react-leaflet';

export default () => {

  const StyledMap = styled(Map)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;

    & .leaflet-tile-pane {
      filter: grayscale(1) contrast(.5) brightness(1.2);
    }
  `;

  const mapLayerKeys = ['esriWorldImagery', 'Stamen_TonerLabels'];
  const defaultMapCenter = [40.44, -79.99];

  const spaces = [{
      "type": "FeatureCollection",
      "features": [{
          "type": "Feature",
          "properties": {
              "shape": "Polygon",
              "name": "Unnamed Layer",
              "category": "default"
          },
          "geometry": {
              "type": "Polygon",
              "coordinates": [
                  [
                      [-79.960943, 40.46987],
                      [-79.960846, 40.469808],
                      [-79.960637, 40.470115],
                      [-79.960728, 40.470151],
                      [-79.960943, 40.46987]
                  ]
              ]
          },
          "id": "469b4c6e-e4ab-4889-8d85-a40f68f23a03"
      }]
  }];

  const coordsRaw = [
    [40.46987, -79.960943],
    [40.469808, -79.960846],
    [40.470115, -79.960637],
    [40.470151, -79.960728],
    [40.46987, -79.960943]
  ]; 

  return (
    <div>

      <SearchControls>
        <form>
          <Autocomplete />
          <TimeSelect />
        </form>
      </SearchControls>  
    
      <StyledMap
        id="mapId"
        center={coordsRaw[0]}
        zoom={zoom}
        zoomControl={false}
      >
        {mapLayerKeys.map((key) => (
        <TileLayer
          maxNativeZoom={mapSources[key].maxNativeZoom}
          maxZoom={21}
          ext="png"
          key={key}
          url={mapSources[key].url}
          attribution={false ? mapSources[key].attribution : ''}
          style={{ opacity: 0.1 }}
        />
      ))}

      <Polygon color="purple" positions={coordsRaw} />

      </StyledMap>
    </div>
  );
};

