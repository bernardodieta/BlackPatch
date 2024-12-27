import IphonesServicesDao from "./dao/mongo/adminInventoryServices/iphones.services.js";
import IpadsServicesDao from "./dao/mongo/adminInventoryServices/ipads.services.js";
import IwatchServiceDao from "./dao/mongo/adminInventoryServices/iwatch.services.js";
import MacBookProServiceDao from "./dao/mongo/adminInventoryServices/macbookpro.services.js";
import MacBookAirServiceDao from "./dao/mongo/adminInventoryServices/macbookair.services.js";
import UsersServicesDao from "./dao/mongo/usersServices.js";

import userRepository from "./repository/users.repository.js";
import macbookAirRepository from "./repository/macbookair.repository.js";
import macbookProRepository from "./repository/macbookpro.repository.js";
import iwatchRepository from "./repository/iwatchs.repository.js";
import ipadsRepository from "./repository/ipads.repository.js";
import iphonesRepository from "./repository/iphones.repository.js";

const userDao = new UsersServicesDao()
const iPhonesDao = new IphonesServicesDao()
const iPadDao = new IpadsServicesDao()
const iwatchDao = new IwatchServiceDao()
const macbookProDao = new MacBookProServiceDao()
const macbookAirDao = new MacBookAirServiceDao()


export const userService = new userRepository(userDao)
export const macbookProService = new macbookProRepository(macbookProDao)
export const macbookAirService = new macbookAirRepository(macbookAirDao)

export const iwatchService = new iwatchRepository(iwatchDao)
export const ipadService = new ipadsRepository(iPadDao)
export const iPhonesServices = new iphonesRepository(iPhonesDao)