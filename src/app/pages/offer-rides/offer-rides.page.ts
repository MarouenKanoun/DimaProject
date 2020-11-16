import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

declare var google: any;

@Component({
  selector: 'app-offer-rides',
  templateUrl: './offer-rides.page.html',
  styleUrls: ['./offer-rides.page.scss'],
})
export class OfferRidesPage implements OnInit {


  autocomplete1: { 'query': string };
  autocomplete2: { 'query': string };

  autocompleteItems1: any = [];
  autocompleteItems2: any = [];

  GoogleAutocomplete;

  @ViewChild('map', { static: true }) mapElement: ElementRef;
  map: any;

  latOri = -14.5931473;
  longOri = -56.1224024;

  latDest = -15.5931473;
  longDest = -56.1224024;

  constructor(private router: Router) { }

  ngOnInit() {
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete1 = { query: '' };
    this.autocompleteItems1 = [];
    this.autocomplete2 = { query: '' };
    this.autocompleteItems2 = [];
    this.loadMap(this.latOri, this.longOri, this.latDest, this.longDest);
  }

  loadMap(latOri, lngOri, latDest, lngDest) {

    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    directionsDisplay = new google.maps.DirectionsRenderer();
    var bounds = new google.maps.LatLngBounds;

    var origin1 = { lat: parseFloat(latOri), lng: parseFloat(lngOri) };
    var destinationA = { lat: latDest, lng: lngDest };

    var destinationIcon = 'https://chart.googleapis.com/chart?' +
      'chst=d_map_pin_letter&chld=D|FF0000|000000';
    var originIcon = 'https://chart.googleapis.com/chart?' +
      'chst=d_map_pin_letter&chld=O|FFFF00|000000';
    var map = new google.maps.Map(this.mapElement.nativeElement, {
      center: { lat: latOri, lng: lngOri },
      disableDefaultUI: true,
      zoom: 100
    });

    directionsDisplay.setMap(map);
    var geocoder = new google.maps.Geocoder;

    var service = new google.maps.DistanceMatrixService;

    service.getDistanceMatrix({
      origins: [origin1],
      destinations: [destinationA],
      travelMode: 'DRIVING',
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false
    }, function (response, status) {
      if (status !== 'OK') {
        alert('Error was: ' + status);
      } else {
        var originList = response.originAddresses;
        var destinationList = response.destinationAddresses;
        var outputDiv = document.getElementById('output');
        // outputDiv.innerHTML = '';
        // deleteMarkers(markersArray);

        var showGeocodedAddressOnMap = function (asDestination) {
          var icon = asDestination ? destinationIcon : originIcon;
          return function (results, status) {
            if (status === 'OK') {
              map.fitBounds(bounds.extend(results[0].geometry.location));
              /*markersArray.push(new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
                icon: icon
              }));*/
            } else {
              alert('Geocode was not successful due to: ' + status);
            }
          };
        };

        directionsService.route({
          origin: origin1,
          destination: destinationA,
          travelMode: 'DRIVING'
        }, function (response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });


        for (var i = 0; i < originList.length; i++) {
          var results = response.rows[i].elements;
          geocoder.geocode({ 'address': originList[i] },
            showGeocodedAddressOnMap(false));
          for (var j = 0; j < results.length; j++) {
            geocoder.geocode({ 'address': destinationList[j] },
              showGeocodedAddressOnMap(true));
            // outputDiv.innerHTML += 'DE: ' + originList[i] + ' || PARA: ' + destinationList[j] +
            //     '|| DISTÂNCIA: ' + results[j].distance.text + ' EM ' +
            //     results[j].duration.text + '<br>';
          }
        }
      }
    });
    // let latLng = new google.maps.LatLng(-34.9290, 138.6010);

    // let mapOptions = {
    //   center: latLng,
    //   zoom: 15,
    //   disableDefaultUI: true,
    //   mapTypeId: google.maps.MapTypeId.ROADMAP
    // }

    // this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

  onSearchChange1(item) {
    if (this.autocomplete1.query == '') {
      this.autocompleteItems1 = [];
      return;
    }

    this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete1.query }, (predictions, status) => {
      this.autocompleteItems1 = [];
      console.log(predictions, status);

      predictions.forEach(element => {
        this.autocompleteItems1.push(element.description);
      });
    });
  }

  onSearchChange2(item) {
    if (this.autocomplete2.query == '') {
      this.autocompleteItems2 = [];
      return;
    }

    this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete2.query }, (predictions, status) => {
      this.autocompleteItems2 = [];
      console.log(predictions, status);

      predictions.forEach(element => {
        this.autocompleteItems2.push(element.description);
      });
    });
  }

  selectSearchResult1(item) {
    console.log(item);
    this.autocompleteItems1 = [];
    this.autocomplete1.query = item;
  }

  selectSearchResult2(item) {
    console.log(item);
    this.autocompleteItems2 = [];
    this.autocomplete2.query = item;
  }

  addStops() {
    this.router.navigate(['/stopovers']);
  }

}
