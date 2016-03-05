# Sputnik Capstone Test Plan

written by Shan Quinney, William Harrington

**Table of Contents**
* [Revision History](https://github.com/wrh2/sputnik/wiki/Phase-1-Test-Plan#revision-history)
    * [Introduction](https://github.com/wrh2/sputnik/wiki/Phase-1-Test-Plan#introduction)
    * [Purpose](https://github.com/wrh2/sputnik/wiki/Phase-1-Test-Plan#purpose)
    * [Testing Procedure](https://github.com/wrh2/sputnik/wiki/Phase-1-Test-Plan#testing-procedure)
    * [Recording of Results, witnessing, and authorities](https://github.com/wrh2/sputnik/wiki/Phase-1-Test-Plan#recording-of-results-witnessing-and-authorities)
* [Reference Documents](https://github.com/wrh2/sputnik/wiki/Phase-1-Test-Plan#reference-documents)
    * [Design Documentation](https://github.com/wrh2/sputnik/wiki/Phase-1-Test-Plan#design-documentation)
* [Overview](https://github.com/wrh2/sputnik/wiki/Phase-1-Test-Plan#overview)
    * [Operational Description](https://github.com/wrh2/sputnik/wiki/Phase-1-Test-Plan#operational-description)
* [Preparation](https://github.com/wrh2/sputnik/wiki/Phase-1-Test-Plan#preparation)
    * [Test Equipment](https://github.com/wrh2/sputnik/wiki/Phase-1-Test-Plan#test-equipment)
    * [Test setup and calibration](https://github.com/wrh2/sputnik/wiki/Phase-1-Test-Plan#test-setup-and-calibration)
* [System Tests](https://github.com/wrh2/sputnik/wiki/Phase-1-Test-Plan#system-tests)
    * [10km Radio Communication Test](https://github.com/wrh2/sputnik/wiki/Phase-1-Test-Plan#10km-radio-communication-test)
    * [System Controller Test](https://github.com/wrh2/sputnik/wiki/Phase-1-Test-Plan#system-controller-test)
    * [Command Test](https://github.com/wrh2/sputnik/wiki/Phase-1-Test-Plan#command-test)

### Revision History

03/03/16 - Created document (Shan)

03/04/16 - Converted to markdown, proofreading changes (Will)

### Introduction

#### Purpose

The purpose of this document is to outline the essential testing that will be conducted to demonstrate the effectiveness of the Sputnik Capstone project. This test plan is not intended to be inclusive and additional testing procedures will be added if deemed necessary by any of the parties involved in the project.

#### Testing Procedure

All of the testing described in this document will be carried out by one or more than one member of the Sputnik capstone team. An effort will be made to have the entire group present for as many of the tests as possible.

#### Recordings of Results, witnessing, and Authorities

The results of all testing conducted in this test plan will be displayed on the project wiki. The tests will be conducted on a pass/fail basis and any tests that do not pass will be noted in the documentation with an explanation as to why they did not pass.
No authorities or witnesses outside of the group will be required to be present during testing.

### Reference Documents

#### Design Documentation

![Phase 1 Low Level Diagram](http://i.imgur.com/LNKEclE.png)

The Sputnik Capstone project is composed of two separate modules: The radio module and the control module. The radio module is home to the microcontroller with integrated radio transceiver (kwox), while the control module is designed to eventually house a radiation hardened watchdog controller that will help reboot the system after debilitating radiation events. For this project, the radiation-hardened components of the control module will be replaced with off-the shelf components to help reduce cost.


### Overview

#### Operational Description

The Portland State Aerospace Society is sponsoring this capstone based on the need for a command, control, and communications system for their CubeSat project. The focus of this capstone will be rapidly prototyping the radio module and the control module. Sputnik will eventually be responsible for long distance communications to and from a 400km low earth orbit, as well as, controlling and communicating with a payload that is housed within the CubeSat. On top of fulfilling these duties, once space bound, it will need to be able to deal with a temperature range of -40C to 50C and radiation events that could cause components to latch up.

### Pre-test preparation

#### Test equipment

The equipment needed for the tests is as follows: 
* Power Supply sufficient to maintain 1A of current at 3V for approximately 15 minutes
* multimeter (voltmeter)
* Oscilloscope
* USB to micro-USB cable
* Logic analyzer

#### Test setup and calibration

The testing setup will be discussed for each case along with any necessary calibration needed prior to testing.

### System tests

#### 10km Radio Communication Test

The radio is fundamental to the functionality of the Sputnik project. It provides the communication channel that will link the satellite to the ground station. Eventually, the radio will need to receive and transmit data over a distance of approximately 400km; however, for this project, a transmission distance of 10km is required.
The purpose of this test is to confirm that the radio is capable of 10km transmission and reception. This test will be performed from one radio board to another and the testers will verify the distance covered during the test by collection GPS location data. The test locations will be predetermined based on both convenience and also where the least restricted signal propagation path will occur.

                          |                              |
------------------------- | ---------------------------- |
Test Case Name            | 10km Radio Communication     |
Test ID#                  | 10k_1.00                     |
Test Writer               | Shan Quinney                 | 
Description               | The purpose of this test is to ensure that the radio is capable of transmitting and receiving data at this distance. |
Tester Information        |    |
Name of Tester            |    |
Time/Date                 |    |
Hardware Version          |  Sputnik radio board version 1.00  |
Setup                     | Determine location A and location B, where there is a minimal distance of 10km between points A and B. Have at least one team member located at location A and at least one other team member located at location B. Each location will have a Sputnik radio board with sufficient power supply. Each location will also have a method to verify GPS and time (cell phone).   |

Step | Action | Expected Result | Pass/Fail | Comments |
---- | ------ | --------------- | --------- | -------- |
1 | Radio at location A is made to transmit data. | Team member at location B confirms receiving data transmitted from location A.  |  |  |
2 | Radio at location B sends confirmation signal. | Team member at location A confirms receiving data from radio at location B.  |  |  |

**Overall Test Result:**

#### System controller Test

The system controller is the guardian of the system. It is present to ensure that the system is functioning correctly and that if any unintended event causes component latch-up or system errors, the system can be cycled or rebooted to return stability. This control system is the other half of the project. Eventually, this system will consist of a radiation hardened microcontroller (ATMegaS128) with supporting radiation hardened LDO. For the purpose of prototyping, the controller is a standard, off-the-shelf ATMega128 chip.

To test the control system, a method to simulate a latch-up event will be used to trigger the watchdog into action. Outlined is the kwox lock-up test. In this test, the crystal on the kwox will be shorted to cause an error in the radio system. The ATMega should sense that the radio is no longer functioning properly and trigger the reset line on the kwox to initiate a reboot.

                          |                              |
------------------------- | ---------------------------- |
Test Case Name            | System Controller Test       |
Test ID#                  | ATM_1.00                     |
Test Writer               | Shan Quinney                 | 
Description               | The purpose of this test is to demonstrate the effectiveness of the watchdog to restart key system functionality after radiation events. |
Tester Information        |    |
Name of Tester            |    |
Time/Date                 |    |
Hardware Version          |  Board Rev.1, Filter Rev.1, Wire antenna  |
Setup                     |    |

Step | Action | Expected Result | Pass/Fail | Comments |
---- | ------ | --------------- | --------- | -------- |
1 | Use a metal tool to cause a short across the crystal | The kwox will loose the signal from the crystal.  |  |  |
2 | Probe the UART line between the controller and the kwox to determine that the life line signal is lost | The UART line will be free of any signal between the kwox and the controller.  |  |  |
3 | Monitor the controller to ensure that the reset line on the kwox has been activated | The reset line on the kwox will be activated in an effort to reboot the device.  |  |  |

**Overall Test Result:**

#### Command test

Send command to module, blink an LED or toggle GPIO pin

                          |                              |
------------------------- | ---------------------------- |
Test Case Name            | Command Test                 |
Test ID#                  | CMD_1.00                     |
Test Writer               | Will Harrington              | 
Description               | The purpose of this test is to demonstrate the effectiveness of the system controller to execute commands |
Tester Information        |    |
Name of Tester            |    |
Time/Date                 |    |
Hardware Version          |    |
Setup                     |    |

Step | Action | Expected Result | Pass/Fail | Comments |
---- | ------ | --------------- | --------- | -------- |
1 | Send command | Successful send  |  |  |
2 | Observe LED on prototype | LED lights up  |  |  |

**Overall Test Result:**