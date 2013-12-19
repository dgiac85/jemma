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
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import javax.xml.bind.annotation.adapters.HexBinaryAdapter;
import javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter;


/**
 * <p>Java class for ZCLMessage complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="ZCLMessage">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="RxTime" type="{http://www.zigbee.org/GWGSchema}unsigned32Bit"/>
 *         &lt;element name="DestinationEndpoint" type="{http://www.zigbee.org/GWGSchema}Endpoint"/>
 *         &lt;element name="SourceAddress" type="{http://www.zigbee.org/GWGSchema}Address" minOccurs="0"/>
 *         &lt;element name="SourceEndpoint" type="{http://www.zigbee.org/GWGSchema}Endpoint" minOccurs="0"/>
 *         &lt;element name="ProfileID" type="{http://www.zigbee.org/GWGSchema}ProfileIdentifier" minOccurs="0"/>
 *         &lt;element name="ClusterID" type="{http://www.zigbee.org/GWGSchema}ClusterIdentifier"/>
 *         &lt;element name="ZCLPayload" type="{http://www.w3.org/2001/XMLSchema}hexBinary"/>
 *         &lt;element name="APSStatus" type="{http://www.zigbee.org/GWGSchema}unsigned32Bit"/>
 *         &lt;element name="SourceAddressMode" type="{http://www.w3.org/2001/XMLSchema}unsignedInt"/>
 *         &lt;element name="ZCLHeader" type="{http://www.w3.org/2001/XMLSchema}hexBinary"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ZCLMessage", propOrder = {
    "rxTime",
    "destinationEndpoint",
    "sourceAddress",
    "sourceEndpoint",
    "profileID",
    "clusterID",
    "zclPayload",
    "apsStatus",
    "sourceAddressMode",
    "zclHeader"
})
public class ZCLMessage {

    @XmlElement(name = "RxTime")
    protected long rxTime;
    @XmlElement(name = "DestinationEndpoint")
    protected short destinationEndpoint;
    @XmlElement(name = "SourceAddress")
    protected Address sourceAddress;
    @XmlElement(name = "SourceEndpoint")
    protected Short sourceEndpoint;
    @XmlElement(name = "ProfileID")
    protected Integer profileID;
    @XmlElement(name = "ClusterID")
    protected int clusterID;
    @XmlElement(name = "ZCLPayload", required = true, type = String.class)
    @XmlJavaTypeAdapter(HexBinaryAdapter.class)
    @XmlSchemaType(name = "hexBinary")
    protected byte[] zclPayload;
    @XmlElement(name = "APSStatus")
    protected long apsStatus;
    @XmlElement(name = "SourceAddressMode")
    @XmlSchemaType(name = "unsignedInt")
    protected long sourceAddressMode;
    @XmlElement(name = "ZCLHeader", required = true, type = String.class)
    @XmlJavaTypeAdapter(HexBinaryAdapter.class)
    @XmlSchemaType(name = "hexBinary")
    protected byte[] zclHeader;

    /**
     * Gets the value of the rxTime property.
     * 
     */
    public long getRxTime() {
        return rxTime;
    }

    /**
     * Sets the value of the rxTime property.
     * 
     */
    public void setRxTime(long value) {
        this.rxTime = value;
    }

    /**
     * Gets the value of the destinationEndpoint property.
     * 
     */
    public short getDestinationEndpoint() {
        return destinationEndpoint;
    }

    /**
     * Sets the value of the destinationEndpoint property.
     * 
     */
    public void setDestinationEndpoint(short value) {
        this.destinationEndpoint = value;
    }

    /**
     * Gets the value of the sourceAddress property.
     * 
     * @return
     *     possible object is
     *     {@link Address }
     *     
     */
    public Address getSourceAddress() {
        return sourceAddress;
    }

    /**
     * Sets the value of the sourceAddress property.
     * 
     * @param value
     *     allowed object is
     *     {@link Address }
     *     
     */
    public void setSourceAddress(Address value) {
        this.sourceAddress = value;
    }

    /**
     * Gets the value of the sourceEndpoint property.
     * 
     * @return
     *     possible object is
     *     {@link Short }
     *     
     */
    public Short getSourceEndpoint() {
        return sourceEndpoint;
    }

    /**
     * Sets the value of the sourceEndpoint property.
     * 
     * @param value
     *     allowed object is
     *     {@link Short }
     *     
     */
    public void setSourceEndpoint(Short value) {
        this.sourceEndpoint = value;
    }

    /**
     * Gets the value of the profileID property.
     * 
     * @return
     *     possible object is
     *     {@link Integer }
     *     
     */
    public Integer getProfileID() {
        return profileID;
    }

    /**
     * Sets the value of the profileID property.
     * 
     * @param value
     *     allowed object is
     *     {@link Integer }
     *     
     */
    public void setProfileID(Integer value) {
        this.profileID = value;
    }

    /**
     * Gets the value of the clusterID property.
     * 
     */
    public int getClusterID() {
        return clusterID;
    }

    /**
     * Sets the value of the clusterID property.
     * 
     */
    public void setClusterID(int value) {
        this.clusterID = value;
    }

    /**
     * Gets the value of the zclPayload property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public byte[] getZCLPayload() {
        return zclPayload;
    }

    /**
     * Sets the value of the zclPayload property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setZCLPayload(byte[] value) {
        this.zclPayload = ((byte[]) value);
    }

    /**
     * Gets the value of the apsStatus property.
     * 
     */
    public long getAPSStatus() {
        return apsStatus;
    }

    /**
     * Sets the value of the apsStatus property.
     * 
     */
    public void setAPSStatus(long value) {
        this.apsStatus = value;
    }

    /**
     * Gets the value of the sourceAddressMode property.
     * 
     */
    public long getSourceAddressMode() {
        return sourceAddressMode;
    }

    /**
     * Sets the value of the sourceAddressMode property.
     * 
     */
    public void setSourceAddressMode(long value) {
        this.sourceAddressMode = value;
    }

    /**
     * Gets the value of the zclHeader property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public byte[] getZCLHeader() {
        return zclHeader;
    }

    /**
     * Sets the value of the zclHeader property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setZCLHeader(byte[] value) {
        this.zclHeader = ((byte[]) value);
    }

}
