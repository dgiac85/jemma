/**
 * This file is part of JEMMA - http://jemma.energy-home.org
 * (C) Copyright 2013 Telecom Italia (http://www.telecomitalia.it)
 *
 * JEMMA is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License (LGPL) version 3
 * or later as published by the Free Software Foundation, which accompanies
 * this distribution and is available at http://www.gnu.org/licenses/lgpl.html
 *
 * JEMMA is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License (LGPL) for more details.
 *
 */
//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.1.9-03/31/2009 04:14 PM(snajper)-fcs 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2013.12.13 at 03:45:34 PM CET 
//


package org.energy_home.jemma.zgd.jaxb;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for PowerDescriptor complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="PowerDescriptor">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="CurrentPowerMode" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;enumeration value="Synchronized"/>
 *               &lt;enumeration value="Periodic"/>
 *               &lt;enumeration value="Stimulated"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="AvailablePowerSources" type="{http://www.zigbee.org/GWGSchema}PowerSources" minOccurs="0"/>
 *         &lt;element name="CurrentPowerSources" type="{http://www.zigbee.org/GWGSchema}PowerSources" minOccurs="0"/>
 *         &lt;element name="CurrentPowerSourceLevel" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;enumeration value="Critical"/>
 *               &lt;enumeration value="33Percent"/>
 *               &lt;enumeration value="66Percent"/>
 *               &lt;enumeration value="100Percent"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "PowerDescriptor", propOrder = {
    "currentPowerMode",
    "availablePowerSources",
    "currentPowerSources",
    "currentPowerSourceLevel"
})
public class PowerDescriptor {

    @XmlElement(name = "CurrentPowerMode")
    protected String currentPowerMode;
    @XmlElement(name = "AvailablePowerSources")
    protected PowerSources availablePowerSources;
    @XmlElement(name = "CurrentPowerSources")
    protected PowerSources currentPowerSources;
    @XmlElement(name = "CurrentPowerSourceLevel")
    protected String currentPowerSourceLevel;

    /**
     * Gets the value of the currentPowerMode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCurrentPowerMode() {
        return currentPowerMode;
    }

    /**
     * Sets the value of the currentPowerMode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCurrentPowerMode(String value) {
        this.currentPowerMode = value;
    }

    /**
     * Gets the value of the availablePowerSources property.
     * 
     * @return
     *     possible object is
     *     {@link PowerSources }
     *     
     */
    public PowerSources getAvailablePowerSources() {
        return availablePowerSources;
    }

    /**
     * Sets the value of the availablePowerSources property.
     * 
     * @param value
     *     allowed object is
     *     {@link PowerSources }
     *     
     */
    public void setAvailablePowerSources(PowerSources value) {
        this.availablePowerSources = value;
    }

    /**
     * Gets the value of the currentPowerSources property.
     * 
     * @return
     *     possible object is
     *     {@link PowerSources }
     *     
     */
    public PowerSources getCurrentPowerSources() {
        return currentPowerSources;
    }

    /**
     * Sets the value of the currentPowerSources property.
     * 
     * @param value
     *     allowed object is
     *     {@link PowerSources }
     *     
     */
    public void setCurrentPowerSources(PowerSources value) {
        this.currentPowerSources = value;
    }

    /**
     * Gets the value of the currentPowerSourceLevel property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCurrentPowerSourceLevel() {
        return currentPowerSourceLevel;
    }

    /**
     * Sets the value of the currentPowerSourceLevel property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCurrentPowerSourceLevel(String value) {
        this.currentPowerSourceLevel = value;
    }

}
